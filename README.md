# backendTemplate
Creating the template for a backend

1) npm init -y

2) Installation: npm i knex sqlite3 express dotenv bcryptjs
3) npm i -D nodemon

4) npx knex init (Knex was not install globally [npm i -g knex ==> knex init])

5) File Structure:

index.js - 
a) port information with env variable
b) require dotenv config
c) server listen

.env - NODE_ENV=development PORT=5000

server.js - 
1) Express
2) Server
3) API Requests

n) Export Server

package.json - scripts
a) "start":"node index.js"
b) "server":"nodemon index.js"

knexfile.js
-copy and paste stuff

6) Knex wise
a) npx knex migrate:make users-table
b) npx knex seed:make 001-users

7) Database

Migration: users-table
a) incrementing id 
b) username unique notNull
c) password notNull
d) name [optional]
e) age integer [optional]
f) subscription bool [optional] - default to false

npx knex migrate:latest

Seed: users
{id: 1, username: "Devin", password: "Devin", age: 14, subscription: false, name: "Devin"}
npx knex seed:run

8) Users
a) Users
b) Users Model
    i) require database from dbConfig
    ii) database helper functions
c) Users Router
    i) router = express("express").router()
    ii) import bcrypt
    iii) import Users from users-model
    

9) dbConfig
a) knex
b) config -> knexfile
c) environment
d) export config