import createFeedbackUseCaseAdapter from './createFeedbackUseCaseAdapter';
import createFeedbackUseCase from '../core/usecases/createFeedbackUseCase';

jest.mock('../core/usecases/createFeedbackUseCase', () => ({
	__esModule: true, // this property makes it work
	default: jest.fn(() => ({type: 'BUG', comment: 'comment'}))
}));

describe('createFeedbackUseCaseAdapter', () => {
	const res = {
		status: jest.fn(() => res),
		json: jest.fn(() => {
		})
	} as any;

	afterAll(() => jest.clearAllMocks())

	test('Should return created feedback', async () => {
		const req = {body: {}} as any
		await createFeedbackUseCaseAdapter(req, res)

		expect(res.status).toHaveBeenCalledWith(201)
		expect(res.json).toHaveBeenCalled()
	})

	test('Should return error when an error occur', async () => {
		(createFeedbackUseCase as any).mockImplementation(() => {
			throw new Error()
		})
		const req = {body: {}} as any
		await createFeedbackUseCaseAdapter(req, res)

		expect(res.status).toHaveBeenCalledWith(422)
	})
})
