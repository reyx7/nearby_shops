from django.apps import AppConfig
from graphene import ObjectType
from .api import ShopQuery


class ShopConfig(AppConfig):
    name = 'shop'


class AppShopQuery(ShopQuery, ObjectType):
    """
        Merge all Query class in the user application in
        one hebride class.
    """
    pass
