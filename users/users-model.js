const db = require("/data/dbConfig.js");
module.exports = {};

//database helper functions
const insert = (user) => {
    return db("users").insert(user);
}