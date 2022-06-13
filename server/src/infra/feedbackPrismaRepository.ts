import Feedback from '../core/entities/feedback';
import { prisma } from './prisma';

const feedbackPrismaRepository = (newFeedback: Feedback) => {
  return prisma.feedback.create({
    data: { ...newFeedback }
  })
}

export default {
  create: feedbackPrismaRepository
}