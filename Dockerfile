FROM node:18-alpine

COPY . /app
WORKDIR /app

RUN npm ci --force
RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npx", "serve", "build"]