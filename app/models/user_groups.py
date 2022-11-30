from .db import db, environment, SCHEMA, add_prefix_for_prod


user_groups = db.Table("user_groups",
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True),
    db.Column("group_id", db.Integer, db.ForeignKey(add_prefix_for_prod("groups.id")), primary_key=True)
)

if environment == "production":
    user_groups.schema = SCHEMA