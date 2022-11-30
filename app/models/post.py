from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date
from .likes import likes


class Post(db.Model):
    __tablename__ = 'posts'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String, nullable=True)
    description = db.Column(db.String, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    group_id = db.Column(db.Integer, db.ForeignKey("groups.id"), nullable=False)
    created_at = db.Column(db.Date, nullable=False, default=date.today)
    updated_at = db.Column(db.Date, nullable=False, default=date.today)

    posts = db.relationship("User", back_populates="owns_posts")
    posts_in_groups = db.relationship("Group", back_populates="group_posts")
    post_likes = db.relationship("User", secondary=likes, back_populates="user_likes")


    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "image":self.image,
            "description": self.description,
            "ownerId": self.owner_id,
            "groupId": self.group_id,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
