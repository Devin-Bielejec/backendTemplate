# backendTemplate
Creating the template for a backend

### npm init -y

### Installation: npm i knex sqlite3 express dotenv bcryptjs
## npm i -D nodemon

### npx knex init (Knex was not install globally [npm i -g knex ==> knex init])

### File Structure:

#### index.js - 
1. port information with env variable
2. require dotenv config
3. server listen

#### .env - NODE_ENV=development PORT=5000

#### server.js - 
1. Express
2. Server
3. API Requests
4. Export Server

#### package.json - scripts
1. "start":"node index.js"
2. "server":"nodemon index.js"

#### knexfile.js
1. copy and paste stuff

#### Knex wise
1. npx knex migrate:make users-table
2. npx knex seed:make 001-users

#### Database

#### Migration: users-table
1. incrementing id 
2. username unique notNull
3. password notNull
4. name [optional]
5. age integer [optional]
6. subscription bool [optional] - default to false

#### npx knex migrate:latest

#### Seed: users
1. {id: 1, username: "Devin", password: "Devin", age: 14, subscription: false, name: "Devin"}
npx knex seed:run

#### Users
1. Users
2. Users Model
    1. require database from dbConfig
    2. database helper functions
3. Users Router
    1. router = express("express").router()
    2. import bcrypt
    3. import Users from users-model
    

#### dbConfig
1. knex
2. config -> knexfile
3. environment
4. export config