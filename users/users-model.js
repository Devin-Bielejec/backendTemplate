const db = require("/data/dbConfig.js");
module.exports = {
    insert,
    getBy
};

//database helper functions
const insert = (user) => {
    return db("users").insert(user);
}

//Not using first because database restricts usernames to UNIQUE
const getBy = (prop) => {
    return db("users").where(prop);
}