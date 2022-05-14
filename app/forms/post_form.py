from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, TextAreaField, DateField
from wtforms.validators import DataRequired


class NewPost(FlaskForm):
    title = IntegerField("Owner")
    description = TextAreaField("Description", validators=[DataRequired()])
    # image = StringField("Image", validators=[DataRequired()])
    submit = SubmitField("Submit Post")