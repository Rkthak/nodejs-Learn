## Status Codes

General Format:

- 1xx: Informational responses (which means the request was received and understood) --rarely used in practice.
- 2xx: Successful responses (which means the request was successfully received, understood, and accepted).
- 3xx: Redirection messages (this means that the request needs to be redirected to another URL).
- 4xx: Client error responses (which means that the request contains bad syntax or cannot be fulfilled).
- 5xx: Server error responses (which means that the server failed to fulfill a valid request).

Some Commonly Used Status Codes:

- 200 OK: The request was successful, and the server returned the requested data.
- 201 Created: The request was successful, and the server created a new resource.
- 204 No Content: The request was successful, but there is no content to return.
- 400 Bad Request: The request was invalid or cannot be processed by the server.
- 401 Unauthorized: The request requires authentication, and the client has not provided valid credentials.
- 403 Forbidden: The server understood the request, but the client does not have permission to access the requested resource.
- 404 Not Found: The requested resource could not be found on the server.
- 500 Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.
