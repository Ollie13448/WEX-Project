from django.shortcuts import render

def register(request):
    return render(request, 'register.html')

def success(request):
    return render(request, 'success.html')