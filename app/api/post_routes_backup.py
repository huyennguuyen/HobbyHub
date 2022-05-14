
# from flask import Blueprint, request, render_template, redirect
# from app.models import db, Group
# from app.forms import NewGroup
# from datetime import date

# group_routes = Blueprint('groups', __name__)

# @group_routes.route('/new', methods=['POST'])
# def new_group():
#     form = NewGroup()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         data = request.get_json(force=True) # not needed if using form.
#         print("HI----------------------------", data)
#         new_group = Group(
#             owner_id=data["owner_id"],
#             name=data["name"],
#             description=data["description"],
#             background_image=data["background_image"],
#         )
#         # print("THIS IS NEW GROUP-------", form.data)
#         db.session.add(new_group)
#         db.session.commit()
#         return new_group.to_dict()
#     return form.errors


# # @note_routes.route("/<int:id>", methods=["PUT", "DELETE"])
# # def note_changes(id):
# #     if request.method == "DELETE":
# #         group = Group.query.get(id)
# #         db.session.delete(group)
# #         db.session.commit()
# #         return {}
    
# #     else:
# #         if form.validate_on_submit():
# #             group = Group.query.get(id)
# #             group.note = form.data["note"],
# #             this_note.trip_date = form.data["tripDate"],
# #             current_time = date.today()
# #             this_note.updated_at = current_time

# #             db.session.add(this_note)
# #             db.session.commit()
# #             return this_note.to_dict
# #         else:
# #             return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# @group_routes.route('/users/<int:id>')
# def get_groups(id):
#     groups = Group.query.filter(Group.owner_id == id).all()
#     all_groups = {}
#     for group in groups:
#         all_groups[group.id] = group.to_dict()
#     return all_groups

# @group_routes.route('/<int:id>', methods=["GET", "PUT", "DELETE"])
# def get_single_group(id):
#     if request.method == "GET":
#         group = Group.query.get(id)
#         print("THIS IS GROUP-----", group)
#         return group.to_dict()
    
#     if request.method == "PUT":
#         form = NewGroup()
#         form['csrf_token'].data = request.cookies['csrf_token']
#         if form.validate_on_submit():
#             group = Group.query.get(id)
#             group.name= form.data["name"]
#             group.description = form.data["description"]
#             group.background_image = form.data["background_image"]

#             db.session.add(group)
#             db.session.commit()
#             return group.to_dict()

#     if request.method =="DELETE":
#         group = Group.query.get(id)
#         db.session.delete(group)
#         db.session.commit()
#         return {}