# docker-compose-scale-example
Docker Compose scale example

## Run

add in your `/etc/hosts`  the following line
```
127.0.0.1   http://scale-test.com/
```

launch app 
```
docker-compose up
```

scale app container
```
docker-compose scale mynodeapp=4
```

visit http://scale-test.com/
refresh...
refresh...
refresh...

Hostname and ips should change.

## Requirement

* docker-compose file version 2 
* docker-compose engine version 1.6.2+
