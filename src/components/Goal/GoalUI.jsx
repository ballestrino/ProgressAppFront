import { useLocation } from 'react-router'
import Goal from './Goal'

export default function GoalInterface() {
  const location = useLocation()
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

  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col w-2/5 h-screen py-20 gap-5'>
        <h1 className='text-4xl'>{title}</h1>
        <section className='grid grid-cols-1 gap-y-5'>
          {goals.map(goal => (
            <Goal key={goal.id} goal={goal} />
          ))}
        </section>
      </div>
    </div>
  )
}
