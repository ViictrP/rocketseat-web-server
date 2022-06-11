import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react'
import Loading from '../Loading'

interface ScreenshotButtonProps {
  onScreenshotTook: (image: string) => void
}

const ScreenshotButton = ({ onScreenshotTook }: ScreenshotButtonProps) => {
  const [screenshot, setScreenshot] = useState<string | undefined>()
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')
    setScreenshot(base64image)
    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }

  const InsideButton = () => (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6 " />}
    </button>
  )

  const InsideImage = () => (
    <button
      onClick={() => setScreenshot(undefined)}
      type="button"
      className="p1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      style={{
        backgroundImage: `url(${screenshot})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 180
      }}
    >
      <Trash weight="fill" />
    </button>
  )

  return screenshot ? <InsideImage /> : <InsideButton />
}

export default ScreenshotButton
