const express = require("express");
const app = express(0);

app.listen(3000, ()=>console.log("Hello World"));
app.get("/", (req, res) => res.send("Hello World"));
