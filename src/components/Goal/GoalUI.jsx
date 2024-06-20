import { useLocation, useNavigate } from 'react-router'
import Goal from './Goal'
import LeftShortArrow from '../../assets/icons/arrow-left-short.svg'

export default function GoalUI() {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id') // id para obtener las metas de un proyecto
  const title = queryParams.get('title')

  const goals = [
    {
      id: 1,
      title: 'Goal 1',
      description: 'Description 1'
    },
    {
      id: 2,
      title: 'Goal 2',
      description: 'Description 2'
    },
    {
      id: 3,
      title: 'Goal 3',
      description: 'Description 3'
    }
  ]

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
          <h1 className='text-4xl'>{title}</h1>
        </section>
        <section className='grid grid-cols-1 gap-y-5'>
          {goals.map(goal => (
            <Goal key={goal.id} goal={goal} />
          ))}
        </section>
      </div>
    </div>
  )
}
