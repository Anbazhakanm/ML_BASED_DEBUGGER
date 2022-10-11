import requests
  
# Sample array
array = [1,2,3,4,5,6,7,8,9,10]
  
# Data that we will send in post request.
data = {'array':array}
  
# The POST request to our node server
res = requests.get('http://127.0.0.1:3000/view')
  
# Convert response data to json
  
print('hello', res.content)

