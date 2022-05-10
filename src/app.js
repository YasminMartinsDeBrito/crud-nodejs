import express  from "express"
import useRouter from "./routes/users.routes"

const port  = 3002
const app = express()
app.use(express.json())

//  users
app.use("/users", useRouter)


// animais
const animals = []
app.post("/animal", (req,res) => {
    const { nome, idade, raca, especie} = req.body

    animals.push({
        nome,
        idade,
        raca,
        especie,
        id: uuidv4()
    })
    return res.status(201).send()
})

app.get("/animal",(req,res) => {
    return res.status(200).json(animals)
})




// home
app.get("/", (req,res) => {
    res.send("Hello node js Backend")
})

app.listen(port)

