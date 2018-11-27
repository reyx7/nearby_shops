# Nearby Shops Demo App   ![PyPI - Python Version](https://img.shields.io/pypi/pyversions/Django.svg)

Simple demo application working with Django & React.js frameworks, including GraphQL query language. ❄️

## Functional spec
 - [X] As a User, I can sign up using my email & password
 - [X] As a User, I can sign in using my email & password
 - [X] As a User, I can display the list of shops sorted by distance
 - [X] As a User, I can like a shop, so it can be added to my preferred shops Acceptance criteria: liked shops shouldn’t be displayed on the main page
- [X] [BONUS] As a User, I can dislike a shop, so it won’t be displayed within “Nearby Shops” list during the next 2 hours
- [X] [BONUS] As a User, I can display the list of preferred shops
- [X] [BONUS] As a User, I can remove a shop from my preferred shops list

### Screenshot

![screanshots](https://serving.photos.photobox.com/396602456a80a2f49780b498abea7a16186ae3916d9ae049a7a66aa4fd7f3e162819a439.jpg)

### Credentials for tests
The source code in branch master contains a mini database in file sqlitle3.db that hold data for the demo, no configuration needed for database.
```
Email : demo@dj.js
Password: demo
```

### Run

nearby_shops requires  [Python3](https://www.python.org/) to run.
Install the dependencies and start the server For production environments....

Clone the prject 
```sh
$ git clone https://github.com/reyx7/nearby_shops.git
$ cd nearby_shops
```
Install required python packages dependencies, don't worry pipenv will create new Virtual LAN for the project your python environment will be not affected.
```sh
$ pip3 install pipenv
$ pipenv install --pre
```

Start the server in Port 8000
```sh
$ pipenv run gunicorn  -b "0.0.0.0:8000" backend.config.wsgi
```

If you need more workers, add --workers=n options to [gunicorn](https://gunicorn.org/)
```sh
$ pipenv run gunicorn  -b "0.0.0.0:8000" --workers=3 backend.config.wsgi
```

Verify the server in your preferred browser.

```
http://localhost:8000
```


### Run in docker
nearby_shops is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
$ git clone https://github.com/reyx7/nearby_shops.git
cd nearby_shops
docker build -t nearby_shops .
```
This will create the nearby_shops image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 7000 of the host to port 8000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 7000:8000 --restart="always" nearby_shops
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
http://localhost:7000
```


#### Building from source
Build from source requires [node v4+](http://nodejs.org) and [Python3](https://www.python.org/).

Clone the project and install backend dependences  :
```sh
$ git clone https://github.com/reyx7/nearby_shops.git
$ cd nearby_shops
```

Install and build frontend : 
```sh
$ yarn install
$ yarn build
```
Run collect static cmd of django manage script to drive and zip the forntend and media files to public path.
```sh
$ pipenv ./manage.py collectstatic
```
Run the server in the port 8000
```sh
$ pipenv run gunicorn  -b "0.0.0.0:8000" backend.config.wsgi
``` 

Check the application in your favorite browser:
```sh
    http://localhost:8000/
```


### Frameworks and Tools

Nearby_shops is currently using  the following frameworks and tools. Instructions on how to use them in your own application are linked below.

| Tools | README |
| ------ | ------ |
| Django | https://github.com/django/django/blob/master/README.rst |
| Docker | https://www.docker.com/ |
| React.js | https://github.com/facebook/react/blob/master/README.md|
| Graphql | https://github.com/graphql/graphql-js/blob/master/README.md |
| Material-ui | https://github.com/mui-org/material-ui/blob/master/README.md|
| Apollo Client | https://github.com/apollographql/apollo-client/blob/master/README.md |
| Graphine | https://github.com/graphql-python/graphene/blob/master/README.md |
| Jwt | https://github.com/flavors/django-graphql-jwt/blob/master/README.rst |


### Todos

 - Write Tests
 - Improve UX and UI
 - Deploy demo in heroku

License
----
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

