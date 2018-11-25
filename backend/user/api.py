from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
import graphene


class UserType(DjangoObjectType):
    """
        Create Graphql Type for User model
    """
    class Meta:
        """
            Metadata
        """
        model = get_user_model()


class UserQuery(graphene.ObjectType):
    """
        Query class for user model type
    """

    me = graphene.Field(UserType)

    def resolve_me(self, info):
        """
            Return the user in the session
        """
        return info.context.user
