from pyexpat import model
from statistics import mode
from turtle import ondrag
from django.db import models

class Pill(models.Model):

    class Meta:
        db_table = 'pill'
    
    pill_id = models.AutoField(primary_key=True)
    pill_name = models.CharField(max_length=255)
    pill_company_name = models.CharField(max_length=255)
    pill_expiration_date = models.CharField(max_length=255)
    pill_take_process = models.TextField()
    pill_take_warning = models.TextField()
    pill_content = models.TextField()
    pill_thumbnail = models.CharField(max_length=100)
    pill_domestic = models.BooleanField()
    review_average = models.FloatField()
    review_count = models.IntegerField()
    created_date = models.DateTimeField()
    modified_date = models.DateTimeField()
    
    def __str__(self):
        return self.pill_name

class PillNutrient(models.Model):
    class Meta:
        db_table = 'pill_nutrient'

    pill_nutrient_id = models.AutoField(primary_key=True)
    pill_id = models.ForeignKey('Pill', related_name='nutrient_pill', on_delete=models.CASCADE)
    nutrient_id = models.ForeignKey('nutrient', related_name='nutrient', on_delete=models.CASCADE)

class Nutrient(models.Model):
    class Meta:
        db_table = 'nutrient'

    nutrient_id = models.AutoField(primary_key=True)
    nutrient_name = models.CharField(max_length=255)


class PillFunctionality(models.Model):
    class Meta:
        db_table = 'pill_functionality'

    pill_functionality_id = models.AutoField(primary_key=True)
    pill_id = models.ForeignKey('Pill', related_name='functionality_pill', on_delete=models.CASCADE)
    functionality_id = models.ForeignKey('Functionality', related_name='functionality', on_delete=models.CASCADE)

class Functionality(models.Model):
    class Meta:
        db_table = 'functionality'

    functionality_id = models.AutoField(primary_key=True)
    functionality_content = models.CharField(max_length=255)