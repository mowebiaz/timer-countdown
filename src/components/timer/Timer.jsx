import { useEffect, useState } from 'react'
import './Timer.css'

export function Timer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    if (eventDate) {
      const timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(timerInterval);
          alert("Countdown complete!");
        }

        setTimeLeft(remainingTime);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [eventDate, timeLeft]);

  const formatTime = (time) => {
    const pad = (num) => num.toString().padStart(2, '0')
    const seconds = pad(Math.floor((time / 1000) % 60))
    const minutes = pad(Math.floor((time / (1000 * 60)) % 60))
    const hours = pad(Math.floor((time / (1000 * 60 * 60)) % 24))
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))
    return { days, hours, minutes, seconds }
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
