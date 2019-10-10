const db = require("../data/dbConfig.js");


//database helper functions
const insert = (user) => {
    return db("users").insert(user);
}

const getBy = (prop) => {
    return db("users").where(prop).first();
}

module.exports = {
    insert,
    getBy
};