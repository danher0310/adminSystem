from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
  def create_user(self, email, password, **extra_field):
    if not email:
      raise ValueError ('User must have an email address')
    
    email = self.normalize_email(email)
    user = self.model(email = email, **extra_field)
    user.set_password(password)
    
    user.save()
    
    return user
   
  def create_superuser(self, email, password, **extra_field):
    user = self.create_user(email, password, **extra_field)
    user.is_superuser = True
    user.is_staff = True
    user.save()
    
    return user
     
class UserAccount(AbstractBaseUser, PermissionsMixin):
  id = models.AutoField(primary_key=True, editable=False)
  email = models.EmailField(max_length=255, unique=True)
  first_name = models.CharField(max_length=255)
  last_name = models.CharField(max_length=255)
  charge = models.CharField(max_length=255)
  phone = models.CharField(max_length=255)
  address = models.CharField(max_length=255)
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)                           
  
  objects = UserAccountManager()
  
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS=['first_name', 'last_name', 'charge', 'phone', 'address', "is_staff", "is_superuser" ]
  
  def get_full_name(self):
    return self.first_name + ' ' + self.last_name
  
  def get_short_name(self):
    return self.first_name
  
  def __str__(self):
    return self.email
  