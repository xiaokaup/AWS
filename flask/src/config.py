import os
from app import app
from flask_sqlalchemy import SQLAlchemy

SALQLCHEMY_DATABASE_URL = os.environ.get('DATABASE_URL') or \
"postgresql://postgres:postgres@postgres:5432/db"


app.config.from_object(__name__)
db=SQLAlchemy(app)