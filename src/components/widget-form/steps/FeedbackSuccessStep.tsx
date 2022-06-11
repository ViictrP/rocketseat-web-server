import CloseButton from '../../CloseButton'
import successImageURL from '../../../assets/ok.png'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

const FeedbackSuccessStep = ({
  onFeedbackRestartRequested
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageURL} alt="Sucesso" className="w-auto" />
        <span className="text-xl mt-8">Agradecemos o feedback!</span>
        <button
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          onClick={onFeedbackRestartRequested}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}

export default FeedbackSuccessStep
