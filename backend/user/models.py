from django.db import models
from django.contrib.auth.models import UserManager, AbstractUser

# Create your models here.


class User(AbstractUser):
    """
        Overriding Django user model to fit the project constraints
        like : email is used for authentication.
    """

    username = models.CharField(max_length=250, unique=True)

    email = models.EmailField(max_length=250, unique=True)

    USERNAME_FIELD = 'email'

    objects = UserManager()

    lat = models.FloatField(default=0)

    let = models.FloatField(default=0)

    REQUIRED_FIELDS = ['username']
