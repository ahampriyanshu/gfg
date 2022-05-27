const express= require("express");

const app= express();

app.get("/", function(req, res){
    console.log(req);
    res.send("<h1>Hello, World!</h1>");
});

app.listen(3001, function () {
    console.log("Server started on port 3000");
})