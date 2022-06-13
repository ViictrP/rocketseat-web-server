import express from 'express'
import cors from 'cors'

import {createFeedbackUseCaseAdapter} from './rest';

const app = express()

app.use(cors())
app.use(express.json())

app.post('/feedbacks', createFeedbackUseCaseAdapter)

app.listen(3333, () => {
	console.log('HTTP server running at port 3333')
})
