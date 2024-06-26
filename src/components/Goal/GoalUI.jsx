import { useLocation, useNavigate } from 'react-router'
import Goal from './Goal'
import LeftShortArrow from '../../assets/icons/arrow-left-short.svg'
import { useContext, useEffect, useState } from 'react'
import { GoalsContext } from '../../context/GoalsProvider'

export default function GoalUI() {
  const { goals, getGoals } = useContext(GoalsContext)
  const [projectTitle, setProjectTitle] = useState('')

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get('id')
    const title = queryParams.get('title')
    getGoals(id)
    setProjectTitle(title)
  }, [])

  const handleReturn = () => {
    navigate('/projects')
  }

  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col w-2/5 h-screen py-20 gap-5'>
        <section className='flex w-full items-center gap-1 px-4'>
          <button alt='go back' onClick={handleReturn}>
            <img src={LeftShortArrow} alt='left arrow' className='w-5 h-5' />
          </button>
          <h1 className='text-4xl'>{projectTitle}</h1>
        </section>
        <section className='grid grid-cols-1 gap-y-5'>
          {goals.map(goal => (
            <Goal key={goal.goal_id} goal={goal} />
          ))}
        </section>
      </div>
    </div>
  )
}
