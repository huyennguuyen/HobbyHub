
from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date
from .user_groups import user_groups


class Group(db.Model):
    __tablename__ = 'groups'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String, nullable=False)
    background_image = db.Column(db.String, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    created_at = db.Column(db.Date, nullable=False, default=date.today)
    updated_at = db.Column(db.Date, nullable=False, default=date.today)


    groups = db.relationship("User", back_populates="owns_groups")
    group_posts= db.relationship("Post", back_populates="posts_in_groups", cascade="all, delete-orphan")
    group_users = db.relationship("User", secondary=user_groups, back_populates="user_attends")


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description":self.description,
            "backgroundImage": self.background_image,
            "ownerId": self.owner_id,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
