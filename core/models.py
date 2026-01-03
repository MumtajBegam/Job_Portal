from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_recruiter = models.BooleanField(default=False)
    is_jobseeker = models.BooleanField(default=False)
    phone = models.CharField(max_length=15, blank=True, null=True)
    def __str__(self):
        return self.username

class Job(models.Model):
    recruiter = models.ForeignKey(User, on_delete=models.CASCADE, related_name="jobs")
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    salary = models.IntegerField()
    posted_at = models.DateTimeField(auto_now_add=True)
    
class JobSeeker(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='jobseeker_profile')
    resume = models.FileField(upload_to='resumes/')
    skills = models.TextField()

    def __str__(self):
        return self.user.username

class Application(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    applicant = models.ForeignKey(User, on_delete=models.CASCADE)
    resume = models.FileField(upload_to='resumes/')
    applied_at = models.DateTimeField(auto_now_add=True)

class Recruiter(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='recruiter_profile')
    company_name = models.CharField(max_length=100)
    company_website = models.URLField(blank=True)

    def __str__(self):
        return self.user.username