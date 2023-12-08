from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    sku = models.CharField(max_length=20)
    price = models.IntegerField(default=0)
    image = models.CharField(max_length=200)

    def __str__(self):
        return self.name
