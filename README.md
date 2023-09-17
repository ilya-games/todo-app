# todo-app
[![publish app](https://github.com/ilya-games/todo-app/actions/workflows/publish-app.yml/badge.svg)](https://github.com/ilya-games/todo-app/actions/workflows/publish-app.yml)
![nodeJS](https://img.shields.io/static/v1?label=nodeJS&message=18.0.0&color=<COLOR>)
![react](https://img.shields.io/static/v1?label=React&message=18.2.0&color=<COLOR>)
![docker](https://img.shields.io/static/v1?label=Docker&message=3.8&color=<COLOR>) 
author: lebedev.ilia.alekseevich@gmail.com

## App preparation and starting (local)
1. Enter the working directory:
```bash
cd /TODO-APP
```
2. Install all the dependencies from package.json:
```bash
npm install
```
3. Start the app:
```bash
npm start
```

## Docker commands
To build and run app container use Docker:
```bash
docker compose up todo_app
```
After local starting via docker you willl be able to visit:
>http://localhost:3000 - client page in dev mode