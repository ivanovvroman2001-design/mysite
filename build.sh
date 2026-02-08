#!/usr/bin/env bash
pip install -r requirements.txt
pip install django
pip install --upgrade pip
python manage.py collectstatic --no-input
