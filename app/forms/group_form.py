from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, BooleanField, DateField
from wtforms.validators import DataRequired


class NewGroup(FlaskForm):
    owner_id = IntegerField("Owner")
    name = StringField("Name", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    background_image = StringField("Image URL", validators=[DataRequired()])
    submit = SubmitField("Submit Group")