from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Job, Application, JobSeeker, Recruiter

class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('username', 'email', 'is_jobseeker', 'is_recruiter', 'is_staff')
    fieldsets = UserAdmin.fieldsets + (
        ('User Type', {'fields': ('is_jobseeker', 'is_recruiter', 'phone')}),
    )
    
admin.site.register(User, CustomUserAdmin)
admin.site.register(Job)
admin.site.register(Application)
admin.site.register(JobSeeker)
admin.site.register(Recruiter)
