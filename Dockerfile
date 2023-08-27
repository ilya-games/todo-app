FROM node:18-alpine

LABEL org.opencontainers.image.source=https://github.com/ilya-games/todo-app

COPY . /app
WORKDIR /app

RUN npm ci --force
RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npx", "serve", "build"]