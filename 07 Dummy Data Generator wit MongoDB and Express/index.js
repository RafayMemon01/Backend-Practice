import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/Emplyee.js";


const app = express()
const conn = await mongoose.connect("mongodb://localhost:27017/company")

app.set("view engine", "ejs")

const getRandom = (arr)=>{
    let randomIndex = Math.floor(Math.random() * (arr.length-1))
    return arr[randomIndex]
}
let employees = [];


app.get("/", (req, res) => {
    res.render('index')
    console.log("Hello World")  
})

app.get('/generate', async (req,res)=>{
    await Employee.deleteMany({})
    let name = ["John", "Jane", "Bob", "Alice", "Mike"]
    let language = ["Python", "Java", "JavaScript", "C++", "C#"]
    let city = ["New York", "London", "Paris", "Tokyo", "Sydney"]

    for (let index = 0; index < 10; index++) {
        let create =await Employee.create({
            name: getRandom(name),
            language: getRandom(language),
            city: getRandom(city),
            salary: Math.floor(Math.random() * 22000),
            isManager: Math.random() > 0.5 ? true : false
        });
        console.log(create)
        employees.push(create)
        
    }
    res.json({
        message: "Data Generated", employees 
    })

})



app.listen(3000, () => {
    console.log("Server is running on port 3000")
})