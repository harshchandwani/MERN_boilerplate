import mongoose from 'mongoose'

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDB is Connected")
    } catch (error) {
        console.log("Error Connecting to DB", error.message)
    }
}
export default connectToMongoDB