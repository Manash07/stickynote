import express from "express"

const app = express();

app.get("api/notes", (req,res)=>{

    res.send("This is a test api file")
})

app.listen(5001, ()=> {

    console.log("This app is running on port 5001")
})


