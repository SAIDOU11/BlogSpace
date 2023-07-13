1. What's the difference between a Base URL and an Endpoint?

- Base URL is the part of the URL that won't change,
  no matter which ressource we want to get from the API.
- An Endpoints specifies which resource we want to get from the API.

Given the following URLs from an example API:

- https://blahblahblah.com/api/v2/users
- https://blahblahblah.com/api/v2/products
- https://blahblahblah.com/api/v2/products/123

2. Which part is the Base URL?

- https://blahblahblah.com/api/v2

3. What are the available endpoints?

/users, /products, /products/{123} - Could be an id
