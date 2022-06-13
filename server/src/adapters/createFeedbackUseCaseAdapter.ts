import {Request, Response} from 'express';

import createFeedbacks from '../core/usecases/createFeedbackUseCase';
import feedbackPrismaRepository from '../infra/feedbackPrismaRepository';

const createFeedbackUseCaseAdapter = async (req: Request, res: Response) => {
	try {
		const {body} = req
		console.log('[createFeedbackUseCasePort]: save feedbacks request received with body {}', body)
		const newFeedback = await createFeedbacks(body, feedbackPrismaRepository)
		console.log(`[createFeedbackUseCasePort]: new feedback [id]: ${newFeedback.id} saved`)
		res.status(201).json(newFeedback)
	} catch (error) {
		console.log(`[createFeedbackUseCasePort]: an error occured while saving the new feedback [${error}]`)
		res.status(422).json({error})
	}
}

export default createFeedbackUseCaseAdapter
