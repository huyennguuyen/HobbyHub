from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, TextAreaField, DateField
from wtforms.validators import DataRequired


class NewPost(FlaskForm):
    title = StringField("Title")
    description = TextAreaField("Description", validators=[DataRequired()])
    # image = StringField("Image", validators=[DataRequired()])
    submit = SubmitField("Submit Post")

class EditPost(FlaskForm):
    title = StringField("Title")
    description = TextAreaField("Description", validators=[DataRequired()])
    # image = StringField("Image", validators=[DataRequired()])
    submit = SubmitField("Submit Post")