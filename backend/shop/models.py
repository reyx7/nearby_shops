"""
    TODO doc for the file
"""
from django.db import models
from django.contrib.auth import get_user_model
from math import sqrt
from django.utils.timezone import now
from datetime import timedelta


class Point(models.Model):
    """
        TODO doc
    """
    lat = models.FloatField(null=True)

    let = models.FloatField(null=True)


class Shop(models.Model):
    """
        TODO doc
    """
    name = models.CharField(max_length=250)

    picture = models.URLField()

    city = models.CharField(max_length=250)

    country = models.CharField(max_length=250)

    point = models.OneToOneField(to=Point, on_delete=models.Case)

    liked = models.ManyToManyField(
        get_user_model(), through='Like', related_name='favorite_shops')

    disliked = models.ManyToManyField(
        get_user_model(), through='Dislike', related_name='+')

    @classmethod
    def get_sorted_by_distance(cls, user):
        """
            #TODO
            sorted shops buy nearby distance bitwin the
            point of user and shops point location.
        """
        return Shop.objects.exclude(
            # exclude shops that user already like.
            liked=user
            # exclude shops that the user dislike in last 2 hours
        ).exclude(

            dislike__created_at__gt=now() - timedelta(hours=2)
        )


class Like(models.Model):
    """
        TODO doc
    """

    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='like')

    shop = models.ForeignKey(
        Shop, on_delete=models.CASCADE, related_name='like')


class Dislike(models.Model):
    """
        TODO doc
    """

    created_at = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='dislike')

    shop = models.ForeignKey(
        Shop, on_delete=models.CASCADE, related_name='dislike')
