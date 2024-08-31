import express from 'express'
import {fileURLToPath} from 'url'
import path from 'path'
import blog from './routes/blog.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

app.use(express.static("public"))

app.use("/blog", blog)

app.get("/",(req, res)=>{
    res.sendFile("/index.html")
})
app.get("/templates",(req, res)=>{
    res.sendFile("templates/index.html", {"root": __dirname})
    console.log("template folder sended")
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})