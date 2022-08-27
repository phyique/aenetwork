## Getting Started

To get started locally, install dependencies then run project

```
npm install

npm run start
```

## Building a Docker Image
First to build a docker image for this project run

```
docker build . -t <image-name> OR docker-compose build
```

## Running the Docker Image in a Container
Use the docker run command to run the image in side of a container. This is running in an isolated process and has all the resources need to execute
```
docker run -p 3000:3000 <image-name> OR docker-compose up
```

### TO AUTHENTICATE

`POST /signup`

    curl --location --request POST 'http://localhost:3000/signup' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "email": "",
    "password": ""
    }'

`POST /login`

    curl --location --request POST 'http://localhost:3000/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "email": "",
    "password": ""
    }'

Use the token retrieved as the authorization header for REST API below

# REST API

The REST API to the example app is described below.

### Request

`GET /api/shows`

    curl --location --request GET 'http://localhost:3000/api/shows'
    --header 'Authorization: Bearer <token>' \

### Response

    {
    "data": [
        {
            ...
            "name": "game of thrones part 2",
            "homepage": "newhomepage.com",
            "show_id": "...",
            "created_by": [],
            "seasons": [
                {
                    "episode_count": 40,
                    ...
                }
            ],
            ...
            "__v": 0,
            "overview": "this is a tale of epic proportions"
        }
    ],
    "isSuccessful": true
    }

### Request

`POST /api/shows`

    curl --location --request POST 'http://localhost:3000/api/shows' \
    --header 'Authorization: Bearer <token>' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "game of thrones",
        "homepage": "thrones@gmail.com",
        "type": "ty series"
        ...
    }'

### Response
    { "isSuccessful": true }

### Request

`PUT /api/shows`

    curl --location --request PUT 'http://localhost:3000/api/shows' \
    --header 'Authorization: Bearer <token>' \
    --header 'Content-Type: application/json' \
    --data-raw '{ 
        "show_id": "vFZ6VUq",
        "name": "game of thrones part 3",
        "homepage": "newhomepage.com",
        "overview": "this is a tale of epic proportions, for all time",
        "created_by": [{"name":"chuck_lorri"}]
    }'

### Response
    {
    "data": {
        "_id": "6309a2af6aba12eeed2e443f",
        "name": "game of thrones part 3",
        "homepage": "newhomepage.com",
        "created_by": [
            {
                "name": "chuck_lorri",
                "_id": "6309a67508a1f7d8b9eae5d6"
            }
        ],
        "type": "tv series",
        ...
        "overview": "this is a tale of epic proportions, for all time"
    },
    "isSuccessful": true
}

### Request

`DELETE /api/shows/:id`

    curl --location --request DELETE 'http://localhost:3000/api/shows/:id' \
    --header 'Authorization: Bearer <token>' \
    --header 'Content-Type: application/json' \

### Response
    { "isSuccessful": true }
