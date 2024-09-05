import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express()

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.get('/todo',(req,res)=>{
    try {
        const todo = new Todo({
            title: "first todo",
            description: "this is first todo",
            isDone: false
        })
        todo.save()
        res.send("todo added")
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
});
