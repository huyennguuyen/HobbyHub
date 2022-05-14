from flask import Blueprint, request, render_template, redirect
from app.models import db, Group
from app.forms import NewGroup, EditGroup
from datetime import date
from app.bucketconfig import (
upload_file_to_s3, allowed_file, get_unique_filename)

post_routes = Blueprint('posts', __name__)

@post_routes.route('/new', methods=['POST'])
def new_group():
    form = NewGroup()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # data = request.get_json(force=True) 
        # print("HI----------------------------", data)

        image_url = request.files["background_image"]

        print("IMAGE_URL---------", image_url)

        image_url.filename = get_unique_filename(image_url.filename)

        print("THIS IS IMAGE_URL FILENAME------", image_url.filename)

        image_upload = upload_file_to_s3(image_url)

        print("IMAGE_UPLOAD---------", image_upload)

        image = image_upload['url']

        print("THIS IS REQUEST FORM----", request.form)
        print("THIS IS REQUEST DATA-----", request.data)


        new_group = Group(
            owner_id=request.form["owner_id"],
            name=request.form["name"],
            description=request.form["description"],
            background_image=image,
        )
        # print("THIS IS NEW GROUP-------", form.data)
        db.session.add(new_group)
        db.session.commit()
        return new_group.to_dict()
    return form.errors


# @note_routes.route("/<int:id>", methods=["PUT", "DELETE"])
# def note_changes(id):
#     if request.method == "DELETE":
#         group = Group.query.get(id)
#         db.session.delete(group)
#         db.session.commit()
#         return {}
    
#     else:
#         if form.validate_on_submit():
#             group = Group.query.get(id)
#             group.note = form.data["note"],
#             this_note.trip_date = form.data["tripDate"],
#             current_time = date.today()
#             this_note.updated_at = current_time

#             db.session.add(this_note)
#             db.session.commit()
#             return this_note.to_dict
#         else:
#             return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# @post_routes.route('/users/<int:id>')
# def get_groups(id):
#     groups = Group.query.filter(Group.owner_id == id).all()
#     all_groups = {}
#     for group in groups:
#         all_groups[group.id] = group.to_dict()
#     return all_groups

# @post_routes.route('/<int:id>', methods=["GET", "PUT", "DELETE"])
# def get_single_group(id):
#     if request.method == "GET":
#         group = Group.query.get(id)
#         print("THIS IS GROUP-----", group)
#         return group.to_dict()
    
#     if request.method == "PUT":
#         form = EditGroup()
#         form['csrf_token'].data = request.cookies['csrf_token']
#         if form.validate_on_submit():

#             if "background_image" not in request.files:
#                 return {"errors": "image required"}, 400

#             image_url = request.files["background_image"]

#             # if "image" not in request.files:
#             #     return {"errors": "image required"}, 400

#             # print("IMAGE_URL---------", image_url)

#             image_url.filename = get_unique_filename(image_url.filename)

#             # print("THIS IS IMAGE_URL FILENAME------", image_url.filename)

#             image_upload = upload_file_to_s3(image_url)

#             # print("IMAGE_UPLOAD---------", image_upload)

#             image = image_upload['url']

#             # print("THIS IS REQUEST FORM----", request.form)
#             # print("THIS IS REQUEST DATA-----", request.data)

#             group = Group.query.get(id)
#             group.name= request.form["name"]
#             group.description = request.form["description"]
#             group.background_image = image

#             db.session.add(group)
#             db.session.commit()
#             return group.to_dict()

#     if request.method =="DELETE":
#         group = Group.query.get(id)
#         db.session.delete(group)
#         db.session.commit()
#         return {}

#     # return {}
    
# @post_routes.route('/home')
# def get_groups_home():
#     groups = Group.query.all()
#     print("THIS IS GROUPS BACKEND-----------------", groups)
#     all_groups = {}
#     for group in groups:
#         all_groups[group.id] = group.to_dict()
#     return all_groups