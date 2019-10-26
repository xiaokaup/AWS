from config import db
from app import app
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from model import User

migrate=Migrate(app, db)
manager=Manager(app)

manager.add_command('db', MigrateCommand)

@app.route('/<name>')
def hello_user(name):
    return 'hello {} !'.format(name)

if __name__ =='__main__':
    manager.run()