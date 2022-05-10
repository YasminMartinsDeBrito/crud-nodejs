import express  from "express"
import useRouter from "./routes/users.routes"

const port  = 3003
const app = express()
app.use(express.json())

//  users
app.use("/users", useRouter)


// home
app.get("/", (req,res) => {
    res.send("Hello node js Backend")
})

app.listen(port)

