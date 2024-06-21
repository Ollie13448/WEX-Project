from django.db import models

class User(models.Model):
    user_id = models.CharField(max_length=50, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    password = models.CharField(max_length=50)