from django.db import models

# Create your models here.
# users/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    pass  # Add any additional fields if necessary