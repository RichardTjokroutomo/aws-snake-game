const express = require("express")
const path = require("path")

const app = express()
const breaker = "======================================================"

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "/public")));


app.listen(3000, ()=>{
    console.log("listening on port 3000")
    console.log(breaker)
})

// routes
// ==================================================================================
app.get("/", (req, resp)=>{
    resp.render("home")
})

app.get("/:name", (req, resp)=>{
    const name = req.params["name"]
    resp.render("greet", {name})
})

