const express=require("express")
const server = express();
const path = require("path")

var port = (process.env.PORT || 3000);
server.set("port", port)
server.listen(port)

server.use(express.static(path.join(__dirname, "build")))
server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
    })