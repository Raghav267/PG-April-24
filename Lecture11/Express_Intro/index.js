const express = require("express");
const app = express();

// console.log(app.param);
app.use((req, res) => {
    // console.log(req);
    // console.log(res);
    // console.log("We are in APP.USE!!!")
    // res.send("Hello from Server")
    // res.send("<h1> This is valid html from res.send </h1 >")
    res.status(500).send("Status send")
})

app.listen(3000, () => {
    console.log("Server Start Listening at 3000 prt")
})
