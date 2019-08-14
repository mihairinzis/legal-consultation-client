# Install docker and docker-compose

* install [Docker](https://docs.docker.com/install/)
* install `docker-compose`
  * with [pip](https://packaging.python.org/tutorials/installing-packages/): `pip install docker-compose`
# Docker-compose scenarios
* start an nginx with the client:
``` shell
docker-compose -f docker-compose-dev.yml up --build
```
* clone and start an nginx with the client:
``` shell
docker-compose -f docker-compose-prod.yml up --build
```
* clone run all tests within a headless chrome:
``` shell
docker-compose -f docker-compose-test.yml up --build
```
