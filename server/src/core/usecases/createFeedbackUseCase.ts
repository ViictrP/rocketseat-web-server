import Feedback from '../entities/feedback';
import { FeedbackRepository } from '../repository/feedbackRepository';

const createFeedbacks = async (newFeedback: Feedback, repository: FeedbackRepository): Promise<Feedback> => {
  console.log('[createFeedbacks]: validating new feedback')
  if (!newFeedback.type || !newFeedback.comment) {
    console.log('[createFeedbacks]: new feedback has invalid data')
    throw new Error('feedbacks must have a type and a comment')
  }
  return repository.create(newFeedback)
}

export default createFeedbacks