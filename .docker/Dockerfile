FROM ubuntu:18.04

RUN apt-get update \
 && apt-get install -y curl build-essential

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
 && apt-get update \
 && apt-get install -y nodejs

COPY ./ /vorteex

WORKDIR /vorteex

RUN npm install \
 && npm run build

ENTRYPOINT bash /vorteex/.docker/entrypoint.sh

EXPOSE 3001