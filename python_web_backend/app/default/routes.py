from . import default
from flask import jsonify

@default.route('/')
def home():
    return default.send_static_file('index.html')

@default.route('/api/test', methods=['GET'])
def homeTitle():
    tasks = [
        {
            'id': 1,
            'title': u'Buy groceries',
            'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
            'done': False
        },
        {
            'id': 2,
            'title': u'Learn Python',
            'description': u'Need to find a good Python tutorial on the web',
            'done': False
        }
    ]
    return jsonify({'tasks': tasks})

