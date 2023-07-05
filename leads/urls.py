from django.urls import path

from .views import LeadCreateView, LeadDetailView, LeadListView, LeadUpdateView

app_name = 'leads'

urlpatterns = [
    path('', LeadListView.as_view(), name='lead-list'),
    path('<int:pk>/', LeadDetailView.as_view(), name='lead-detail'),
    path('<int:pk>/update/', LeadUpdateView.as_view(), name='lead-update'),
    path('create/', LeadCreateView.as_view(), name='lead-create'),
]
