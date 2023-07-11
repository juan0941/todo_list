const express = require("express")
require("dotenv").config();
const app = express()
const bodyParser =  require("body-parser")
const mongoose = require("mongoose")
const Todo = require("./models/todo");
const todo = require("./models/todo");



const port = 3000

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


mongoose.connect(process.env.MONGO_DB_URI).then(()=> console.log("conect to db")).catch((err)=>console.error(err))


app.get("/", (Request, response)=>{
    Todo.find()
    .then(result=> {
        response.render("index", { data:result})
        consol.log(result)
    })
})

app.post("/", (Request, response)=>{
    const todo = new Todo({
        todo: request.body.todoValue
    })
    todo.save()
    .then(result => {
        response.redirect("/")
    })

})

app.delete("/:id",(request, response)=>{
    todo.findByIdAndDelete(request.params.id)
    .then(result =>{
        consol.log(result)
    })

})
app.listen(port,()=>{
    console.log("mi servidor esta corriendo en el portal " + port)
})

