Just playing with Django Channels.

Needs a reasonably recent python version I guess.

Run the frontend stuff:

```
cd frontend
yarn
yarn run dev
```

Run the server:

```
virtualenv env
source env/bin/activate
pip install -r requirements.txt
./manage.py migrate
./manage.py runserver
```

Visit [localhost:8000/static/index.html](http://localhost:8000/static/index.html)!
