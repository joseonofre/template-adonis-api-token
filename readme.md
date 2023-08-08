### Postman
https://api.postman.com/collections/1002806-0758bfdc-8ca3-4bdc-877c-c6491b7212af?access_key=PMAT-01H7BG6WQ7WKANE69VBHYFFQVG

#### Api url
https://template-adonis-api-token.up.railway.app

#### Open Routes
/api/auth/login  
/api/auth/register  
/api/auth/logout  
#### Routes with guard
/api/auth/logout  
/api/me

---
## Script inseridos para rodar o deploy
"scripts": {
  ...
  "deploy": "node ace migration:run --force && node build/server.js"
},

---
## Banco de dados - PostgreSQL

## Comandos
#### Comando para inserir no build
yarn build

#### Comando para inserir no deploy
yarn deploy

---
## Configurar envs
PORT=3333
HOST=0.0.0.0
NODE_ENV=production
APP_KEY=Fl9nc8a5v64M2xTS98Uu1BxJilIOs6u4
DRIVE_DISK=local
DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=lucid
PG_PASSWORD=
PG_DB_NAME=lucid
