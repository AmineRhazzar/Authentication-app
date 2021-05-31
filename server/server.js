const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const fs = require("fs");

const app = express();
app.use(
    cors({
        "Access-Control-Allow-Origin": "*",
    })
);
app.use(express.json());

app.post("/register", async (req, res) => {
    const { fullName, email, passwd } = req.body;
    try {
        const salt = await bcrypt.genSalt()
        const hashedPasswd = await bcrypt.hash(passwd, salt);

        fs.readFile(__dirname + '/users.json', (err, oldUsers) => {
            if (err) {
                console.log(err);
            } else {
                //parse the buffer to json
                oldUsers = JSON.parse(oldUsers);
                var newUsers = [...oldUsers, { fullName, email, hashedPasswd }];

                fs.writeFile(__dirname + '/users.json', JSON.stringify(newUsers, null, 4), (err)=> {
                    if (err) {
                        console.log(err);
                    }
                })
            }

        })
        
    } catch (e){
        console.log(e);
    } 
    res.status(201).send(""); 
}); 

app.post('/login', async (req, res) => {
    const { email, passwd } = req.body;
    fs.readFile(__dirname + '/users.json', async (err, users) => {
        if (err) {
            console.log(err);
        }
        users = JSON.parse(users);
        var user = users.find(user => user.email === email)
        if (!user) {
            return res.status(404).send("no user");
        }
        try {
            if (await bcrypt.compare(passwd, user.hashedPasswd)) {
                res.send(user.fullName);
            }
        } catch (e) {
            console.log(e) 
        }
    }) 
})


app.listen(process.env.PORT || 5000, () => {
    console.log("server up and running !"); 
});
