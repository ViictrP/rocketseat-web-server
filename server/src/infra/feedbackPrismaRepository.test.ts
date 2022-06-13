jest.mock('./prisma', () => ({
	__esModule: true, // this property makes it work
	default: 'mockedPrisma',
	prisma: {
		feedback: {
			create: jest.fn((feedback) => feedback.data)
		}
	}
}));

import feedbackPrismaRepository from './feedbackPrismaRepository';


describe('feedbackPrismaRepository', () => {
	const feedback = {screenshot: null, type: 'bug', comment: 'comment'}

	test('Should create a feedback', () => {
		const newFeedback = feedbackPrismaRepository.create(feedback)

		expect(newFeedback).toStrictEqual(feedback)
	})
})
