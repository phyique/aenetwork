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

# REST API

The REST API to the example app is described below.

### Request

`GET /api/shows`

    curl --location --request GET 'http://localhost:3000/api/shows'

### Response

    {

    }

### Request

`POST /api/shows`

    curl --location --request POST 'http://localhost:3000/api/shows' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    
    }'

### Response
    { "isSuccessful": true }

### Request

`PUT /api/shows`

    curl --location --request PUT 'http://localhost:3000/api/shows' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    
    }'

### Response
    { "isSuccessful": true }

### Request

`DELETE /api/shows`

    curl --location --request DELETE 'http://localhost:3000/api/shows' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    
    }'

### Response
    { "isSuccessful": true }
