import { useEffect, useState } from 'react'
import { ConfettiComponent } from '../ConfettiComponent/ConfettiComponent'
import './Timer.css'

export function Timer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate))

  function calculateTimeLeft(eventDate) {
    if (!eventDate) return null
    const currentTime = new Date().getTime()
    const eventTime = new Date(eventDate).getTime()
    return eventTime - currentTime
  }

  useEffect(() => {
    if (!eventDate) return

    const timerInterval = setInterval(() => {
      const remainingTime = calculateTimeLeft(eventDate)
      setTimeLeft(remainingTime)
    }, 1000)

    return () => clearInterval(timerInterval)
  }, [eventDate])

  const formatTime = (time) => {
    const pad = (num) => num.toString().padStart(2, '0')
    const seconds = pad(Math.floor((time / 1000) % 60))
    const minutes = pad(Math.floor((time / (1000 * 60)) % 60))
    const hours = pad(Math.floor((time / (1000 * 60 * 60)) % 24))
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
    return { days, hours, minutes, seconds }
  }

  if (!timeLeft) {
    return (
      <div className="error">
        <p>Date de l&apos;événement invalide ou non définie.</p>
      </div>
    )
  } else if (timeLeft <= 0) {
    return <ConfettiComponent />
  }

  const { days, hours, minutes, seconds } = formatTime(timeLeft)

  return (
    <div className="timer">
      <div className="timer-value">
        {days} <span>jours</span>
      </div>
      <div className="timer-value">
        {hours} <span>heures</span>
      </div>
      <div className="timer-value">
        {minutes} <span>minutes</span>
      </div>
      <div className="timer-value">
        {seconds} <span>secondes</span>
      </div>
    </div>
  )
}
