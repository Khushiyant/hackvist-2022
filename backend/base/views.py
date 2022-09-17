import json

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def apiOverview(request):
    overview = json.load(open('json/api.json'))
    return Response(overview, status=status.HTTP_200_OK)
