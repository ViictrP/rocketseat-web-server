import Feedback from '../entities/feedback';
import createFeedbacks from './createFeedbackUseCase';

describe('createFeedbackUseCase', () => {
  const repository = {
    create: jest.fn()
  }

  const newFeedback: Feedback = {
    type: 'BUG',
    comment: 'comment',
    screenshot: 'screenshot'
  }

  beforeAll(() => {
    jest.spyOn(repository, 'create').mockImplementation((feedback: Feedback) => feedback)
  })

  test('Should create a new feedback', async () => {
    const feedback = await createFeedbacks(newFeedback, repository)
    expect(feedback).toBe(newFeedback)
  })

  test('Should throw error if feedback doesnt have a comment', async () => {
    const invalidFeedback = { ...newFeedback, comment: '' }
    try {
      await createFeedbacks(invalidFeedback, repository)
    } catch (error: any) {
      console.log(error)
      expect(error.message).toStrictEqual('feedbacks must have a type and a comment')
    }
  })
})