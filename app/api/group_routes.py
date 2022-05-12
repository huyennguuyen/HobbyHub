from flask import Blueprint, request, render_template, redirect
from app.models import db, Group
from app.forms import NewGroup
from datetime import date

group_routes = Blueprint('groups', __name__)

@group_routes.route('/new', methods=['POST'])
def new_group():
    form = NewGroup()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = request.get_json(force=True) # not needed if using form.
        print("HI----------------------------", data)
        new_group = Group(
            owner_id=data["ownerId"],
            name=data["name"],
            description=data["description"],
            background_image=data["background_image"],
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


# @note_routes.route('/')
# def get_trip_notes(id):
#     notes = Note.query.filter(Note.trip_id == id).all()
#     all_notes = {}
#     for note in notes:
#         all_notes[note.id] = note.to_dict
#     return all_notes



