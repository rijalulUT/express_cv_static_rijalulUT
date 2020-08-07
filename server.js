const express = require("express");

const app = express();


require("./app/routes/cv.routes")(app)

//define public
app.use(express.static('app/publics'))
const port = 8080;
app.listen(port,()=>{
    console.log(`server is running on http:localhost ${port}`)
})