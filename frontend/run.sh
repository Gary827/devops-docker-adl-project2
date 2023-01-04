#/bin/bash

docker run -d -p 3000:3000 --name=frontend --restart=always --privileged frontend:v1