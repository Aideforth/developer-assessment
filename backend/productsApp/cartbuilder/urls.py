from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from graphene_django.views import GraphQLView

from cartbuilder.schema import schema

urlpatterns = [
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=False, schema=schema))),
]