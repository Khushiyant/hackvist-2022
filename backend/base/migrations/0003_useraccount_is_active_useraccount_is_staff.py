# Generated by Django 4.1.1 on 2022-09-22 06:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0002_ngo_registration_number_useraccount_premium_user_at_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="useraccount",
            name="is_active",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="useraccount",
            name="is_staff",
            field=models.BooleanField(default=False),
        ),
    ]