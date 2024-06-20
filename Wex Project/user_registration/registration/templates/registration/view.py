from django.shortcuts import render

def success(request):
    return render(request, 'registration/success.html')