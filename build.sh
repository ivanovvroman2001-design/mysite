#!/usr/bin/env bash
pip install gunicorn
pip install django
pip install -r requirements.txt
python manage.py collectstatic --no-input
