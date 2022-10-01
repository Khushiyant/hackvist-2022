import json
import os

import requests
from dotenv import load_dotenv
from rest_framework.decorators import api_view
from rest_framework.response import Response

def configure():
    load_dotenv()


@api_view(['GET'])
def tweet_searching(request, field):
    configure()
    headers = {'Authorization': f'Bearer {os.getenv("BEARER_TOKEN")}'}
    params = {'query': field}
    response = requests.get(
        'https://api.twitter.com/2/tweets/search/recent', params=params, headers=headers)
    json_data = json.loads(response.text)

    return Response(json_data)
