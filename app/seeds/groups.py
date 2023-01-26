from app.models import db, Group
from datetime import date


# Adds a demo user, you can add other users here if you want
def seed_groups():
    today = date.today()
    group1 = Group(
        name='Writing Club', 
        description='Join our club to share your scripts, poetry, thoughts, and more!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674774377/aaron-burden-y02jEX_B0O0-unsplash_1_xcc4ft.jpg',
        owner_id=4,
        created_at=today,
        updated_at=today )

    group2 = Group(
        name='We Paint Together', 
        description='We welcome anyone to join our group, experts and beginners', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674774721/russn_fckr-krV5aS4jDjA-unsplash_unybf5.jpg',
        owner_id=4,
        created_at=today,
        updated_at=today )

    group3 = Group(
        name='Time to Read!', 
        description='Got any book recommendations??', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674774827/kimberly-farmer-lUaaKCUANVI-unsplash_dw0l7w.jpg',
        owner_id=,
        created_at=today,
        updated_at=today )

    group4 = Group(
        name='Discover New Music', 
        description=' ', 
        background_image='',
        owner_id=,
        created_at=today,
        updated_at=today )

    group5 = Group(
        name='Language Lovers', 
        description='Learning a new language can be difficult and scouring the internet for resources can be time consuming. Please feel free to share any learning materials!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674775501/priscilla-du-preez-VTE4SN2I9s0-unsplash_m3eyii.jpg',
        owner_id=,
        created_at=today,
        updated_at=today )

    group6 = Group(
        name='Kdrama', 
        description='', 
        background_image='',
        owner_id=,
        created_at=today,
        updated_at=today )

    group7 = Group(
        name='', 
        description='', 
        background_image='',
        owner_id=,
        created_at=today,
        updated_at=today )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_groups():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()