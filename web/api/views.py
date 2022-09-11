from django.http import HttpResponse


def index(request):
    return HttpResponse("Dockerizing Django Application")