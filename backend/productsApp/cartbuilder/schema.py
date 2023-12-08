import graphene
from graphene_django import DjangoObjectType

from cartbuilder.models import Product

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ("id", "name", "description", "sku", "price", "image")

class Query(graphene.ObjectType):
    all_products = graphene.List(ProductType)

    def resolve_all_products(root, info):
        # We can easily optimize query count in the resolve method
        return Product.objects.all()

schema = graphene.Schema(query=Query)
