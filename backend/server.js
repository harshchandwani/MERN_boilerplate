import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectToMongoDB";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use("/api/auth", authRoutes);

server.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is running on PORT", PORT);
})