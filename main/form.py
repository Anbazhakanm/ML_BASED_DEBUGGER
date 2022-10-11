import requests

# The POST request to our node server
res = requests.get('http://127.0.0.1:3000/getData')
# Convert response data to json
# print('hello', res.content)
import sys


print('Results from ML DEBUGGER',res.content)
sys.stdout.flush()