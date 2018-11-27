"""
    TODO doc
"""
from graphene import ObjectType, Schema
from graphql_jwt import ObtainJSONWebToken, Verify
from backend.user.apps import *
from backend.shop.apps import *


class Query(AppUserQuery, AppShopQuery, ObjectType):
    """
        TODO doc
    """
    pass


class Mutation(AppShopMutation, ObjectType):
    """
        TODO doc
    """
    authenticate = ObtainJSONWebToken.Field()

    verify_token = Verify.Field()


schema = Schema(mutation=Mutation, query=Query)
