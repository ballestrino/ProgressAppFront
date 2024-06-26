import GoalUI from '../components/Goal/GoalUI'
import GoalProvider from '../context/GoalsProvider'

export default function Goals() {
  return (
    <GoalProvider>
      <GoalUI />
    </GoalProvider>
  )
}
