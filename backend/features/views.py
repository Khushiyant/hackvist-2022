import json
import os

import requests
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

BEARER_TOKEN = os.environ.get('BEARER_TOKEN')


@api_view(['GET'])
def tweet_searching(request, field):
    headers = {'Authorization': f'Bearer {BEARER_TOKEN}'}
    params = {'query': field}
    response = requests.get(
        'https://api.twitter.com/2/tweets/search/recent', params=params, headers=headers)
    json_data = json.loads(response.text)

    return Response(json_data)
