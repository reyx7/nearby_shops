from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
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


class LikeType(DjangoObjectType):
    """
        Create ModelType for Like model
    """

    class Meta:
        """
            Metadata class
        """

        model = Like


class DislikeType(DjangoObjectType):
    """
        Create ModelType for Dislike model
    """

    class Meta:
        """
            Metadata class
        """

        model = Dislike


class LikeShop(graphene.Mutation):
    """
        LikeShop Mutation
    """
    Output = LikeType

    class Arguments:
        """
            pk unique key of the shop to be liken by the
            user in the session context.
        """
        pk = graphene.ID()

    @login_required
    def mutate(self, info, pk):

        shop = Shop.objects.get(pk=pk)

        return shop.like.create(user=info.context.user)


class DislikeShop(graphene.Mutation):
    """
        DislikeShop Mutation
    """
    Output = DislikeType

    class Arguments:
        """
            pk unique key of the shop to be liken by the
            user in the session context.
        """
        pk = graphene.ID()

    @login_required
    def mutate(self, info, pk):

        shop = Shop.objects.get(pk=pk)

        return shop.dislike.create(user=info.context.user)


class RemoveShop(graphene.Mutation):
    """
        DislikeShop Mutation
    """
    ok = graphene.Boolean()

    class Arguments:
        """
            pk unique key of the shop to be liken by the user
            in the session context.
        """
        pk = graphene.ID()

    @login_required
    def mutate(self, info, pk):
        """
            remove shop with primary key pk from favorite
            shops of the user in the context.
        """

        shop = Shop.objects.get(pk=pk)

        like = Like.objects.get(shop=shop, user=info.context.user)

        like.delete()

        return RemoveShop(True)


class ShopQuery(graphene.ObjectType):
    """
        Query class for model shop
    """
    nearby_shops = graphene.List(ShopType)

    preferred_shops = graphene.List(ShopType)

    @login_required
    def resolve_nearby_shops(self, info):
        """
            Return all nearby shop for given user in the session
            context.
        """
        return Shop.get_sorted_by_distance(
            Point(
                info.context.user.lat,
                info.context.user.let
            )
        )

    @login_required
    def resolve_preferred_shops(self, info):
        """
            Return all preferred shops for given user in the session
            context.
        """
        return info.context.user.favorite_shops.all()


class ShopMutation(graphene.ObjectType):
    """
        All Mutation related with shop model type.
    """
    like = LikeShop.Field()

    dislike = DislikeShop.Field()

    remove = RemoveShop.Field()
