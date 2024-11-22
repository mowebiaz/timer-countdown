import { Timer } from './components/Timer/Timer'

const targetDate = new Date('2024-12-31T23:59:59').getTime()

function App() {
  return <Timer eventDate={targetDate} />
}

export default App
