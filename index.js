const express = require("express")
const dotenv = require("dotenv")
const connectDB =require("./config/connectDB")
const useRoute = require("./routes/userRoute")
const morgan = require("morgan")


const app = express();
dotenv.config();
connectDB();

//middlewares
app.use(express())
app.use("/users", useRoute)
app.use(morgan("dev"))





app.get("/", (req, res)=> {
res.send("<h1>Welcome to our school portal</h1>")
})

const PORT = process.env.PORT || 7912

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
}

)