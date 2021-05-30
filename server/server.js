const express = require("express");
const cors = require("cors");

const app = express();
app.use(
    cors({
        "Access-Control-Allow-Origin": "*",
    })
);
app.use(express.json());

app.post("/login", (req, res) => {
    const { email, passwd } = req.body;
    console.log(email, passwd);
    res.send("hello");
});

app.listen(process.env.PORT || 5000, () => {
    console.log("server up and running !");
});
