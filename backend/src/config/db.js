import mongoose from "mongoose"

export const connectDB = async () => {

    try {

      await mongoose.connect(process.env.DB_Credential)
        console.log("Mongodb database connected successfully")
    } catch (error) {
        console.log("Error! Could not connect.", error)
    }

}