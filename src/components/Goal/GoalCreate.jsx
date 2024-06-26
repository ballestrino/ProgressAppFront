import { useState, useRef, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import arrowRight from '../../assets/icons/arrow-right.svg'
import { GoalsContext } from '../../context/GoalsProvider'

export default function GoalCreate({ project_id, setCreating }) {
  const { createGoal } = useContext(GoalsContext)
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = e => {
    if (!newTitle || !newDescription) return alert('Please fill out all fields')
    e.preventDefault()
    console.log(newTitle, newDescription)
    createGoal(project_id, newTitle, newDescription, false)
    setNewTitle('')
    setNewDescription('')
    setCreating(false)
  }
  return (
    <form
      className='flex w-full overflow-hidden transition-all duration-500'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col w-3/4'>
        <section
          className={`flex w-full justify-between items-center p-4 bg-gray-700 rounded-tl-lg`}
        >
          <input
            ref={inputRef}
            type='text'
            placeholder='goal title'
            className='outline-none bg-gray-700 w-full'
            required
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
        </section>
        <section
          className={`flex px-4 pb-1 w-full bg-gray-700 rounded-bl-lg overflow-hidden transition-all duration-500`}
          style={{ height: '70px' }}
        >
          <input
            type='text'
            placeholder='description'
            required
            className='outline-none bg-gray-700 w-full'
            value={newDescription}
            onChange={e => setNewDescription(e.target.value)}
          />
        </section>
      </div>
      <div className='flex items-center justify-end pr-5 bg-gray-700 rounded-r-lg w-1/3'>
        <button type='submit' className='p-2 rounded-md bg-gray-600 '>
          <img src={arrowRight} alt='' />
        </button>
      </div>
    </form>
  )
}

GoalCreate.propTypes = {
  setCreating: PropTypes.func.isRequired
}
