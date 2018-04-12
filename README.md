#Todo-app API

Personal project for experimenting with node-rest-api.

## Open Endpoints

Open endpoints require no Authentication.

* Creates a user : `POST /users`
* Login : `POST /users/login`

<br />

```javascript
{
    "email": "yourName@email.com",
    "password": "somePassMoreThan6Char"
}
```

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### User related:
* Get user information : `GET /users/me`
* Logout : `DELETE /users/me/token`

### Todo related:
* Create a todo : `POST /todos`
<br />

```javascript
{
	"text":"Some todo"
}
```
* List all todos created by user : `GET /todos`
* Get a todo created by user : `GET /todos/:id`
* Delete a todo created by user : `DELETE /todos/:id`
* Update a todo created by user : `PATCH /todos/:id`

<br />

```javascript
{
	"text":"Some todo",
	"completed":true
}
```