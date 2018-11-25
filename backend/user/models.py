from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

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

    REQUIRED_FIELDS = ['username']
