# registration/views.py
from django.shortcuts import render, redirect
from .forms import RegistrationForm

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            # Process form data here
            return redirect('success')
    else:
        form = RegistrationForm()
    
    return render(request, 'register.html', {'form': form})

def success(request):
    return render(request, 'success.html')
