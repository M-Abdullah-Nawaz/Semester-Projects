from django.test import TestCase

# Create your tests here.
# users/tests.py

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase


class UserTests(APITestCase):

    def test_signup(self):
        url = reverse('signup')
        data = {
            "username": "testuser",
            "email": "testuser@example.com",
            "password": "yourpassword"
        }
        response = self.client.post(url, data)
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('access', response.data)

    def test_login(self):
        # First sign up the user before logging in.
        self.test_signup()
        
        url = reverse('login')
        data = {
            "email": "testuser@example.com",
            "password": "yourpassword"
        }
        
        response = self.client.post(url, data)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)