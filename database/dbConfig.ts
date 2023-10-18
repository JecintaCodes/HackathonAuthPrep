import mongoose from "mongoose"

const whetherURL: string = "mongodb://0.0.0.0:27017/whetherClimateChangeDataBase"

export const DataBase = async()=>{
    try {
        mongoose.connect(whetherURL).then(()=>{
            console.log(`whetherDataBase connected on ${whetherURL}`)
        })
    } catch (error) {
        console.log(`error from database ${error}`)
    }
}