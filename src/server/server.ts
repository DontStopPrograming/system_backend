import { router as routes } from '@routes/routes'
import express, { Application } from 'express'
import morgan from 'morgan'

export const app: Application = express()

app.use(express.json())
app.use(morgan("dev"))

app.use('/api', routes)
