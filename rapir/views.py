from itertools import chain
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core.mail import send_mail
from django.views.generic import ListView
from django.conf import settings

from .models import *
from .forms import ContactForm


class NewsList(ListView):
    model = News
    queryset = News.objects.all()
    template_name = 'rapir/news.html'
    paginate_by = 12


def new(request, slug):
    cur_new = News.objects.get(slug=slug)
    context = {'new': cur_new}
    return render(request, 'rapir/new.html', context)


class WorksList(ListView):
    model = Works
    queryset = Works.objects.all()
    template_name = 'rapir/projects.html'
    paginate_by = 12


def work(request, slug):
    cur_work = Works.objects.get(slug=slug)
    context = {'project': cur_work}
    return render(request, 'rapir/project.html', context)


class ExplorationsList(ListView):
    model = Exploration
    queryset = Exploration.objects.all()
    template_name = 'rapir/searches.html'
    paginate_by = 12


def exploration(request, slug):
    cur_exploration = Exploration.objects.get(slug=slug)
    context = {'search': cur_exploration}
    return render(request, 'rapir/search.html', context)


def main(request):
    last_news = News.objects.all()[:3]
    last_exploration = Exploration.objects.all()[:2]
    last_works = Works.objects.all()[:2]
    list_people = People.objects.all()
    slider = Slider.objects.all()

    context = {'last_news': last_news,
               'searches': last_exploration,
               'projects': last_works,
               'experts': list_people,
               'slider': slider}
    return render(request, 'rapir/index.html', context)


def workers(request, position):
    list_worker = People.objects.filter(position=position)
    context = {'experts': list_worker}
    if position == 'e':
        context['title'] = 'Экспертный совет'
    elif position == 's':
        context['title'] = 'Наблюдательный совет'
    return render(request, 'rapir/experts.html', context)


def person(request, id):
    worker = People.objects.get(id=id)
    context = {'expert': worker}
    return render(request, 'rapir/expert.html', context)


def about(request):
    list_worker = People.objects.all()
    other = About.objects.first()
    context = {'experts': list_worker,
               'about': other}
    return render(request, 'rapir/about.html', context)


class GalleriesList(ListView):
    model = Album
    queryset = Album.objects.all()
    template_name = 'rapir/galleries.html'
    paginate_by = 12

def gallery(request, slug):
    gal_lery = Photo.objects.filter(album__slug=slug)
    title = Album.objects.get(slug=slug)
    context = {'gallery': gal_lery,
               'album': title}
    return render(request, 'rapir/gallery.html', context)


class SmiList(ListView):
    model = Smi
    queryset = Smi.objects.all()
    template_name = 'rapir/mass_media.html'
    paginate_by = 12


class SearchList(ListView):
    template_name = 'rapir/search_result.html'
    paginate_by = 12

    def get_queryset(self):
        query_sets = []
        q = self.request.GET.get('q')
        query_sets.append(News.objects.search(query=q))
        query_sets.append(Works.objects.search(query=q))
        query_sets.append(Exploration.objects.search(query=q))
        query_sets.append(People.objects.search(query=q))

        # и объединяем выдачу
        final_set = list(chain(*query_sets))
        final_set.sort(key=lambda x: x.published, reverse=True)
        return final_set

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context["q"] = f'q={self.request.GET.get("q")}&'
        return context


def contact_view(request):
    # если метод GET, вернем форму
    if request.method == 'GET':
        form = ContactForm()
    elif request.method == 'POST':
        # если метод POST, проверим форму и отправим письмо
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['mess']
            recepients = [settings.EMAIL_HOST_USER]
            send_mail(name + ' -- ' + email, message, settings.EMAIL_HOST_USER, recepients)
            return redirect('main')
    else:
        return HttpResponse('Неверный запрос.')
    return render(request, 'rapir/contact.html', {'form': form})