const router = express("express").router();
const Users = require("./users-model.js");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
    const creds = req.body;

    const salt = bcrypt.genSaltSync(10);
    console.log(salt);
    const hash = bcrypt.hashSync(creds.password, salt);
    console.log(hash);
    
    Users.insert({ ...creds, password: hash })
    .then(res => {
        console.log(res);
        res.status(201).json({message: "User created!"});
    })
    .catch(err => {
        res.status(500).json({message: ""})
    })

})

router.post("/login", (req, res) => {
    const creds = req.body;

    Users.getBy({username: creds.username})
    .then(user => {
        console.log(user);
        //Check if passwords are the same
        if (user && bcrypt.compareSync(creds.password, user.password)) {
            res.status(202).json({message: "Correct Credentials!"})
        } else {
            res.status(401).json({message: "Incorrect Credentials!"})
            //Security Help: User will get incorrect credentials for wrong password or wrong username; user will not know which one.
        }
    })
    .catch(err => {
        res.status(500).json({message: "Database error", error: err})
    })
})