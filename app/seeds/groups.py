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
        owner_id=4,
        created_at=today,
        updated_at=today )

    group4 = Group(
        name='Discover New Music', 
        description='Link below your playlists and share your favorite artists!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674780345/marius-masalar-rPOmLGwai2w-unsplash_luwq8f.jpg',
        owner_id=3,
        created_at=today,
        updated_at=today )

    group5 = Group(
        name='Language Lovers', 
        description='Learning a new language can be difficult and scouring the internet for resources can be time consuming. Please feel free to share any learning materials!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674775501/priscilla-du-preez-VTE4SN2I9s0-unsplash_m3eyii.jpg',
        owner_id=3,
        created_at=today,
        updated_at=today )

    group6 = Group(
        name='Kdrama Fans', 
        description='Ran out of Kdramas to watch? Click here for more!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674777532/kdrama_ioktrc.jpg',
        owner_id=2,
        created_at=today,
        updated_at=today )

    group7 = Group(
        name='Makeup Reviews', 
        description='A space where for unsponsored posts for honest reviews. Which products are your favorite??', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674777648/amy-shamblen-xwM61TPMlYk-unsplash_szg0o0.jpg',
        owner_id=2,
        created_at=today,
        updated_at=today )

    group8 = Group(
        name='NewJeans', 
        description='Bunnies unite!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674777598/newjeans_rntzhc.jpg',
        owner_id=4,
        created_at=today,
        updated_at=today )
    
    group9 = Group(
        name='Studying/Working Habits', 
        description='For days where motivation becomes unreliable and spirits are low. Please share tips on how you achieve your goals!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674777397/lukas-blazek-GnvurwJsKaY-unsplash_op90z1.jpg',
        owner_id=2,
        created_at=today,
        updated_at=today )

    group10 = Group(
        name='Super Duper Easy Recipes', 
        description='Dedicated to recipes that can be done in 15-20 minutes but still delicious!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674777845/vicky-ng-yIh0i6TYGrs-unsplash_k0wmph.jpg',
        owner_id=2,
        created_at=today,
        updated_at=today )

    group11 = Group(
        name='Home Decor', 
        description='Knick knacks to liven up your home. Please include links or add where to find to find them!', 
        background_image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674778969/light_zmwcrk.jpg',
        owner_id=2,
        created_at=today,
        updated_at=today )

    db.session.add(group1)
    db.session.add(group2)
    db.session.add(group3)
    db.session.add(group4)
    db.session.add(group5)
    db.session.add(group6)
    db.session.add(group7)
    db.session.add(group8)
    db.session.add(group9)
    db.session.add(group10)
    db.session.add(group11)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_groups():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()