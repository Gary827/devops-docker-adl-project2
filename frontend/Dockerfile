FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install -y software-properties-common && \
    apt-get update && \
    apt-get -y install tzdata g++ build-essential curl && \
    curl -sL https://deb.nodesource.com/setup_lts.x | bash - && apt-get install -y nodejs

RUN TZ=Asia/Taipei \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata 

WORKDIR /
COPY app /app

WORKDIR /app
RUN npm ci && npm run build 

ENTRYPOINT bash -c "npm run start"
