import express from 'express'
import cors from 'cors'

import {createFeedbackUseCaseAdapter} from './adapters';

const app = express()

app.use(cors())
app.use(express.json())

app.post('/feedbacks', createFeedbackUseCaseAdapter)

const port = process.env.PORT || 3333
app.listen(process.env.PORT || 3333, () => {
	console.log(`HTTP server running at port ${port}`)
})
