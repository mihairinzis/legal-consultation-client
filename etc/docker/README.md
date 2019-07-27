# Install docker and docker-compose

* install [Docker](https://docs.docker.com/install/)
* install `docker-compose`
  * with [pip](https://packaging.python.org/tutorials/installing-packages/): `pip install docker-compose`
* make sure you execute `docker-compose` from `etc/docker`

# Docker-compose scenarios

* start an nginx with the client using the `production`compose:
``` shell
docker-compose -f docker-compose-prod.yml up --build
```
* run all tests within a headless chrome with the `test` compose:
``` shell
docker-compose -f docker-compose-test.yml up --build
```
