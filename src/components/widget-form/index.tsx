import { useState } from 'react'

import bugImageUrl from '../../assets/bug.png'
import ideImageUrl from '../../assets/idea.png'
import otherImageUrl from '../../assets/other.png'
import CloseButton from '../CloseButton'
import FeedbackTypeStep from './steps/FeedbackTypeStep'
import FeedbackContentStep from './steps/FeedbackContentStep'

export const feedbackTypes = {
  bug: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  idea: {
    title: 'Ideia',
    image: {
      source: ideImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  other: {
    title: 'Outro',
    image: {
      source: otherImageUrl,
      alt: 'Imagem de um fone de ouvido'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <header>
      <span className="text-xl leading-6">Deixe seu feedback</span>
      <CloseButton />
    </header>
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep />
      )}
      <footer className="text-xs text-neutral-400">
        Feito com amor pela{' '}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  )
}

export default WidgetForm
