from django.urls import path, include
from .views import *
from .feeds import LatestFeedRSS

urlpatterns = [
    path('news/', include([
        path('<slug:slug>', new, name='new'),
        path('', NewsList.as_view(), name='news'),
    ])),
    path('works/', include([
        path('<slug:slug>', work, name='work'),
        path('', WorksList.as_view(), name='works'),
    ])),
    path('explorations/', include([
        path('<slug:slug>', exploration, name='exploration'),
        path('', ExplorationsList.as_view(), name='explorations'),
    ])),
    path('about-us/', include([
        path('structure/people/people_<int:id>', person, name='expert'),
        path('structure/<str:position>/', workers, name='structure'),
        path('', about, name='about'),
    ])),
    path('galleries/', include([
        path('<slug:slug>', gallery, name='gallery'),
        path('', GalleriesList.as_view(), name='galleries'),
    ])),
    path('smi/', SmiList.as_view(), name='smi'),
    path('search/', SearchList.as_view(), name='search'),
    path('contact/', contact_view, name='contact'),
    path('lastnews/', LatestFeedRSS(), name='rss'),
    path('', main, name='main'),
]
