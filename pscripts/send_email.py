from flask_wtf import Form
from wtforms import StringField, TextField, TextAreaField, SubmitField, validators

class ContactForm(Form):
    name = StringField('Your Name:', [validators.DataRequired()], render_kw={"placeholder": "Name"})
    email = StringField('Your e-mail address:', [validators.DataRequired(), validators.Email('your@email.com')], render_kw={"placeholder": "Your Email"})
    subject = TextField('Subject', [validators.DataRequired()], render_kw={"placeholder": "Subject"})
    message = TextAreaField('Your message:', [validators.DataRequired()], render_kw={"placeholder": "Message"})
    submit = SubmitField('Send Message')

def CheckNameLength(form, field):
  if len(field.data) < 4:
    raise ValidationError('Name must have more then 3 characters')