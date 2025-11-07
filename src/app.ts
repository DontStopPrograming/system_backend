import "module-alias/register"

import { app } from '@server/server'

import '@config/mongodb'
import 'dotenv/config'


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
