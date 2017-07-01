from django.db.models import ForeignKey, TextField, ManyToManyField, Model
from config import settings
from django.db import models
from django.contrib.auth import get_user_model


class Conversation(Model):
    participants = ManyToManyField(get_user_model())
    topic = TextField(null=True)

class ConversationMessage(Model):
    author = ForeignKey(get_user_model(), on_delete=models.CASCADE)
    conversation = ForeignKey(Conversation, related_name='messages', on_delete=models.CASCADE)
    content = TextField()