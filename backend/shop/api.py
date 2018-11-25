from graphene_django import DjangoObjectType
import graphene
from .models import *


class ShopType(DjangoObjectType):
    """
        Create ModelType for Shop model
    """

    class Meta:
        """
            Metadata class
        """

        model = Shop


class ShopQuery(graphene.ObjectType):
    """
        Query class for model shop
    """
    nearby_shops = graphene.List(ShopType)

    def resolve_nearby_shops(self, info):
        """
            #TODO
            Return all nearby shop for given user in the session
            context.
        """
        pass
