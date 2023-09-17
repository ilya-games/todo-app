FROM node:18-alpine

LABEL org.opencontainers.image.source=https://github.com/ilya-games/todo-app

COPY . /app
WORKDIR /app

RUN npm install

ENV NODE_ENV production
ENV WDS_SOCKET_PORT=0

EXPOSE 3000

CMD ["npm", "start"]