import graphene
import graphql_jwt
from backend.user.apps import AppUserQuery


class Query(AppUserQuery, graphene.ObjectType):
    pass


class Mutation(graphene.ObjectType):
    """
        Base Mutation class
    """
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(mutation=Mutation, query=Query)
