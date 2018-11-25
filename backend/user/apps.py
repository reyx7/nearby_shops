from django.apps import AppConfig
from .api import UserQuery
from graphene import ObjectType


class UserConfig(AppConfig):
    name = 'user'


class AppUserQuery(UserQuery, ObjectType):
    """
        Merge all Query class in the user application in
        one hebride class.
    """
    pass
