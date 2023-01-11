from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserCreateSerializar(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
      model = User
      fields = ( 
        'id',
        'email',
        'firs_name',
        'last_name',
        'charge',
        'phone',
        'address',
        'get_full_name',
        'get_short_name',
        'is_superuser'
      )
