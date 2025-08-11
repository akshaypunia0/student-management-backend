import express from "express";
import cors from "cors";
import studentRoutes from "./routes/student.route.js"

const app = express();

app.use(cors())
app.use(express.json())

console.log("App.js file running");

app.use("/api/student", studentRoutes)    //studentRoutes == router in student.route.js


app.get("/", (req, res) => {
    res.send("Server is live 🚀");
    
})

export default app;