import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export function ConfettiComponent() {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      confettiSource={{
        x: width / 2, // Partir du milieu de l'écran horizontalement
        y: height / 2, // Partir du milieu de l'écran verticalement
      }}
      colors={['#fce416', '#A50F03', '#289DB1']}
    />
  )
}
