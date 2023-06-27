from django.urls import path

from .views import LeadListView

app_name = 'leads'

urlpatterns = [
    path('', LeadListView.as_view(), name='lead-list'),
]
