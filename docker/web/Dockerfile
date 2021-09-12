FROM node:15.11.0-alpine

WORKDIR /app

RUN apk update && \
    npm install && \
    npm install -g agentkeepalive --save \
    npm install -g npm@latest && \
    npm install -g @vue/cli