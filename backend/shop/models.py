from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericRelation

# Create your models here.


class Point(models.Model):
    """
        class Model for geolocalization point
    """
    lat = models.FloatField(null=True)

    let = models.FloatField(null=True)


class Action(models.Model):
    """
        Abstract class Action
    """
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)

    object_id = models.PositiveIntegerField()

    content_object = GenericForeignKey('content_type', 'object_id')

    user = models.ForeignKey(to=get_user_model(), on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        """
            Meta class
        """
        abstract = True

        unique_together = (('user', 'content_type', 'object_id'))


class Like(Action):
    pass


class Dislike(Action):
    pass


class Shop(models.Model):
    """
        Class model for shop
    """
    name = models.CharField(max_length=250)

    picture = models.URLField()

    email = models.EmailField(max_length=250)

    point = models.OneToOneField(to=Point, on_delete=models.Case)

    likes = GenericRelation(Like)

    dislikes = GenericRelation(Dislike)
