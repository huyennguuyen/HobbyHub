from app.models import db, Post
from datetime import date


# Adds a demo user, you can add other users here if you want
def seed_posts():
    today = date.today()
    post1_group1 = Post(
        title='A Parallel Universe', 
        description="Coachella 2023 finally arrived. We bought tickets a while back and planned the trip together. But things are different now. We had broken up, yet decided to still go together as a last hurrah. I went to his house, and the initial interaction was painfully awkward. As time went by, our connection felt like we never left. He was my best friend after all. During the festival, our friends watched us with disapproving faces the whole time but we just laughed it off. Then, Frank Ocean finally came on stage. Memories of us putting his songs on repeat while looking up at the ceiling speckled with purple, blue, and red beams from the party lights rushed in. The colorful beams created a faint, hopeful illusion overshadowing my insecurities and doubts and made it seemed like our love was going to be forever. All of his albums were always playing in the background with everything that we did. I especially remember the humming from his laptop and the scratching from my pen would add extra sounds to the songs as if Frank Ocean created a whole new album dedicated to us. I looked at you, and you were feeling the same way. However, the beams from the stage brought reality back. I knew that unlike the songs we had on repeat, we can\'t start over.",
        owner_id=4,
        group_id=1,
        created_at=today,
        updated_at=today )

    post2_group1 = Post(
        title='A Friend', 
        description='I went to school every day, despite dreading it every single time. I still went with the biggest smile on my face and brightest personality. I have always thought that I was all alone, which I didn\'t mind. However, with social pressures perceiving me as the \“lonely loser\”, I had to care. I have never established a solid friend. Friendships would always end in some way for me, and since I was already accustomed to loneliness; I preferred it this way. No judgment, no complications, no feelings involved, just miscellaneous thoughts as my only company. I was ok. Until I met you. We were similar in a lot of ways. We met through mutual friends and became distantly close as others parted us, and we were the only two left. We sat by each other everyday. I finally had a companion for every break and lunch. I sensed her sorrows and she did mine. We mostly sat in silence and I was grateful. We were alone, together.',
        owner_id=4,
        group_id=1,
        created_at=today,
        updated_at=today )

    post1_group2 = Post(
        title='scenery', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674783094/327625258_714110260246510_720014048191738248_n_y5wfhf.jpg', 
        description='a lighthouse by the sea',
        owner_id=2,
        group_id=2,
        created_at=today,
        updated_at=today )

    post2_group2 = Post(
        title='inspired by Arizona tea cans', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674783200/327312094_567778385406514_6004866641451418225_n_dcbxng.jpg', 
        description='some cherry blossom',
        owner_id=3,
        group_id=2,
        created_at=today,
        updated_at=today )

    post3_group2 = Post(
        title='khoi fish', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674783316/327619794_1243040263228249_3654253426155209893_n_xc0mzj.jpg', 
        description='really simple but cool fish',
        owner_id=2,
        group_id=2,
        created_at=today,
        updated_at=today )

    post1_group3 = Post(
        title='Someone Who Will Love You in All Your Damaged Glory by Raphael Bob-Waksberg', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674783650/327551368_933387634320619_2917718940249865383_n_seidat.jpg', 
        description='a collection of fictional short stories that illustrates love in different relationships. the book is touching, funny, and sweet. the author created the tv show Bojack Horseman which is one of my favorite TV shows!',
        owner_id=4,
        group_id=3,
        created_at=today,
        updated_at=today )

    post2_group3 = Post(
        title='What My Mother and I Don\'t Talk About Edited by Michele Filgate', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674783930/327439376_930718711615696_4998392132835968052_n_ppkqtg.jpg', 
        description='fifteen writers describe their relationship with their mom, providing raw perspectives from the good and bad. it was interesting to see how other people were rasied and what traits they possess because of that relationship. this book not only made me reflect my own relationships but i started to appreciate the different styles of writing that authors have rather than just the plot.',
        owner_id=4,
        group_id=3,
        created_at=today,
        updated_at=today )

    post3_group3 = Post(
        title='All the Light We Cannot See by Anthony Doerr', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674784459/327460401_564917728846980_7748355956575049343_n_votuvd.jpg', 
        description='historical fiction book that takes places in WW2 and revolves around the two main characters, Werner and Marie-Laure. i would describe this book as more of a diary that is written in third person. if you are someone that reads for the plot or story, i would not recommend this book as it is more of a recount of what it is like to live during that time. the book follows Werner who lives in Germany and Marie-Laure who lives in France, and it was interesting to see how different their lives were. the author does an incredible job evoking the mood of different cities as well as describing them.',
        owner_id=4,
        group_id=3,
        created_at=today,
        updated_at=today )

    post1_group4 = Post(
        title='my everyday or go to playlist ', 
        description='the main genre that i listen to would have to be indie?? hope you enjoy! link: https://open.spotify.com/playlist/5PwecG3iRvM0AKNx4xthqA?si=e8be2f005a6e4142',
        owner_id=4,
        group_id=4,
        created_at=today,
        updated_at=today )

    post1_group5 = Post(
        title='learning Vietnamese on Duolingo experience', 
        description='Vietnamese on Duolingo is not great if you do not have ANY experience with Vietnamese. i am already familiar with the language and its sentence structure. i have just been using Duolingo as a way to recognize how the accents affect each word and the pattern. Duolingo does not teach you from scratch explaining how accents work. Some of the phrases are also awkward and not really used. I read online that learning vietnamese with Annie is a good way to start from Youtube. i think i will try that soon. Overall, Duolingo is just a way to regurgitate words to be honest, you are not really learning the language.',
        owner_id=4,
        group_id=4,
        created_at=today,
        updated_at=today )

    post1_group6 = Post(
        title='Twenty-Five Twenty-One', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674786336/twenty_surybz.jpg', 
        description='really enjoyed this drama even though i usually do not like romance dramas. it is a bit boring at some parts and i think they dragged the conflict between the two girl friends for way too long. however, i loved the way they portrayed the two main characters\' love story. SPOILER!!! although they did not last, i think this was a perfect example of how sometimes life just happens, and it is what it is. the actors did a splendid job at portraying their love story and how they fell for each other was touching that the fact they did not end up together made me so sad. both of their backstories were rough and their perseverance made them the perfect protagonists. you end up cheering and hoping they achieve all their dreams.',
        owner_id=4,
        group_id=6,
        created_at=today,
        updated_at=today )

    post2_group6 = Post(
        title='Flower of Evil', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674787279/flower_vjcm4q.jpg', 
        description='this drama is more in my lane, action-packed and suspenseful. every single episode got you clenching your bootyhole. this is the type of drama where the protagonist can not catch a break!! which is why i did not like the ending. i think this drama would have been perfect without the ending. my boi deserves happiness for all that he has been through.',
        owner_id=4,
        group_id=6,
        created_at=today,
        updated_at=today )

    post1_group7 = Post(
        title='classic Anastasia Brow Wiz, color: Ebony', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674788685/327387476_558518486210466_9162002719415214353_n_tvybln.jpg', 
        description='this has been my holy grail for years now i love it! if you have black eyebrows i think this is the perfect shade. a sales associate at sephora recommended me medium brown but i think it was too light on me and this one was perfect, but maybe it will work for you!',
        owner_id=4,
        group_id=7,
        created_at=today,
        updated_at=today )

    post2_group7 = Post(
        title='Rare Beauty Melting Blush, color: Nearly Berry', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674788895/326846446_5814576178632756_3250716734022233808_n_jjew2z.jpg', 
        description='i absolutely love the packaging. it is soooo pretty! i love this shade on my skin tone, and i think i have a yellow undertone. it comes off kind of sheer but definitely buildable!',
        owner_id=4,
        group_id=7,
        created_at=today,
        updated_at=today )

    post3_group7 = Post(
        title='Rare Beauty Bronzer Sticks, left in color: always sunny and right in color: happy sol',
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674789072/327465721_916558552714829_8696658980646588010_n_qk5wmq.jpg', 
        description='i love love love these bronzer sticks! they are incredibly creamy and blends into your skin so well! i introduced these to my cousins, and they fell in love with them as well! always sunny is a warmer shade and goes perfectly with peachy blushes. i went ahead and bought happy sol for a cooler shade, and this goes perfectly with the nearly berry melting blush. the only downside is that the cap comes off kind of easily so you would have to be careful where you put it, but other than that it is wonderful!',
        owner_id=4,
        group_id=7,
        created_at=today,
        updated_at=today )
    
    post1_group8 = Post(
        title='i love NewJeans!', 
        description='they are a kpop group that quickly rose to fame due to their nostalgic feeling music despite only having 6 songs! i truly believe they will never have a bad song, and they are trending all over the world at such a young age! i am definitely going to their concert when they announce their world tour. my favorite song from them is attention! what is yours?',
        owner_id=2,
        group_id=8,
        created_at=today,
        updated_at=today )

    post1_group9 = Post(
        title='Merve on Youtube', 
        description='what has significantly changed my working habits would be to play Merve\'s videos in the back. Merve is a grad student living in Scotland, and the scenery out the window is so pretty! i initially thought that Merve edited that in, but that is actually their scenery. the videos are basically just \"Study With Me\" type videos with rain as white noise in the background. these studying sessions are structured by the pomodoro method, but i usually just work through the breaks when i do not want a break. it is really encouraging to see them work and be so concentrated. whenever i lose track or do not want to work anymore, i just watch them work for a few minutes. since they are just so focused on their work, i end up continuing my work as well!',
        owner_id=4,
        group_id=9,
        created_at=today,
        updated_at=today )

    post2_group9 = Post(
        title='Reading!!!!!', 
        description='i have been trying to rekindle my love for reading for years now, ever since i started high school. i was never really consistently reading, and it was always on and off. i took a break from it for like a year now and have recently started to again. i noticed how reading outside of textbooks and articles has helped so much in my ability to comprehend complicated material and just expressing my thoughts. since i have come to appreciate books again, i am now accomplishing work a lot earlier in order to make time to read. i also feel a lot better not having to look at a screen for so long or mindlessly scrolling.',
        owner_id=4,
        group_id=9,
        created_at=today,
        updated_at=today )

    post1_group10 = Post(
        title='my go to recipe: tomato and mozzarella pasta', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674791727/farhad-ibrahimzade-BhEXW19sW1M-unsplash_ccscim.jpg', 
        description='this is my holy grail recipe; it is pretty much the vodka pasta but hold the vodka. this is a super simple where you just boil the water, and cook your pasta for 12 minutes. Then just add the amount of garlic, onion, tomato paste, heavy whipping cream, and green onions that you want. and you are done! super quick and simple. ',
        owner_id=3,
        group_id=10,
        created_at=today,
        updated_at=today )

    post2_group10 = Post(
        title='overnight oats', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674791969/ella-olsson-3_qr5tJOIbs-unsplash_gknj4g.jpg', 
        description='overnight oats is the easiest meal to make. this was my go to during the college days. i think i ate this for a whole year straight to try to save money and time. i basically use half a cup of oats and then eyeball the rest. i then added protein powder, almond milk, greek yogurt, chia seeds, and berries. you can also subsitute the greek yogurt for bananas and just smush them! i actually prefer bananas and think that taste a lot better. plus it makes the oats vegan now!',
        owner_id=2,
        group_id=10,
        created_at=today,
        updated_at=today )

    post1_group11 = Post(
        title='dolls', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674792894/327628202_875206067037021_2255317615055447987_n_ri9eav.jpg', 
        description='these are called blythe dolls but this specific creator does not actually use blythe because it is expensive. the dolls are around $400-$500, and the creator hand makes everything! i think these dolls would look really cute among books on a shelf. my boyfriend says they are creepy, but i am going to get one anyway! the dolls sell out very fast on Etsy, link: https://www.etsy.com/shop/Thingsbynur. can also be found on Instagram under the handle: thingsbynur.',
        owner_id=2,
        group_id=11,
        created_at=today,
        updated_at=today )

    post2_group11 = Post(
        title='stuffed animals', 
        image='https://res.cloudinary.com/dnmimxgbu/image/upload/v1674792846/327029565_920217842330844_7062102625954695051_n_xkbpdj.jpg', 
        description='these are some funky looking stuffed animals. i think they are pretty quirky, idk. they range from $80-$300, depending on the size. these are also hand made. link: https://littlelumps.bigcartel.com/products. can also be found under the Instagram handle: llumps.',
        owner_id=2,
        group_id=11,
        created_at=today,
        updated_at=today )

    
    db.session.add(post1_group1)
    db.session.add(post2_group1)
    db.session.add(post1_group2)
    db.session.add(post2_group2)
    db.session.add(post3_group2)
    db.session.add(post1_group3)
    db.session.add(post2_group3)
    db.session.add(post3_group3)
    db.session.add(post1_group4)
    db.session.add(post1_group5)
    db.session.add(post1_group6)
    db.session.add(post2_group6)
    db.session.add(post1_group7)
    db.session.add(post2_group7)
    db.session.add(post3_group7)
    db.session.add(post1_group8)
    db.session.add(post1_group9)
    db.session.add(post2_group9)
    db.session.add(post1_group10)
    db.session.add(post2_group10)
    db.session.add(post1_group11)
    db.session.add(post2_group11)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()