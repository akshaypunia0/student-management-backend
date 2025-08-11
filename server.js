
import { port } from "./src/config/env.js";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

console.log("server.js file running");

connectDB();

app.listen(port, () => {

    console.log("listenning success");
    
})