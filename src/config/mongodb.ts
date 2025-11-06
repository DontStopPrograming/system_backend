import mongoose from 'mongoose'
import 'dotenv/config'

const mongoUrl = process.env.DB_URI as string

const connection = async () => {
    try {
        const con = await mongoose.connect(mongoUrl)
        console.log('Mongo DB Connected')
        return con
    } catch (error) {
        console.error('error:', error)
        process.exit(1)
    }
}

connection()
