import os
from app import app
from flask_sqlalchemy import SQLAlchemy

SQLALCHEMY_DATABASE_URI = "postgresql://me:me@postgres:5432/db"


app.config.from_object(__name__)
db=SQLAlchemy(app)