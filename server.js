const express = require("express");
const app = express(0);

app.listen(3000, ()=>console.log("Hello World"));
app.get("/", (req, res) => res.send("Hello World"));

const movies = [ 
                [id = 1,
                name = "Hello Brother" ,
                genre = "Comedy",
                year = "2002",
                rating = "8.2"],
                [id = 2,
                name = "Where The Eagles Dare" ,
                genre = "War",
                year = "1965",
                rating = "9.0"],
                [id = 3,
                name = "Sholay" ,
                genre = "Action",
                year = "1975",
                rating = "10"],
                [id = 4,
                name = "Roman Holiday" ,
                genre = "Romance",
                year = "1962",
                rating = "9.5"]
            ];

app.get("/api/movies", (req, res)=> {res.send(movies);});
