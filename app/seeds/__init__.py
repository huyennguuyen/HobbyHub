from flask.cli import AppGroup
from .users import seed_users, undo_users
# from .groups import seed_groups, undo_groups
# from .posts import seed_posts, undo_posts

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding, truncate all tables prefixed with schema name
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # Add a truncate command here for every table that will be seeded.
        db.session.commit()
    seed_users()
    # seed_groups()
    # seed_posts()


# Creates the `flask seed all` command
# @seed_commands.command('all')
# def seed():
#     seed_users()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # undo_groups()
    # undo_posts()
    # Add other undo functions here
