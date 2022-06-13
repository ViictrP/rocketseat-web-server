import Feedback from '../entities/feedback';

export type FeedbackRepository = {
  create: (feedback: Feedback) => Promise<Feedback>
}