import { useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ToggleArrow from '../../assets/icons/caret-right-fill.svg'
import { GoalsContext } from '../../context/GoalsProvider'

export default function Goal({ goal, project_id }) {
  const [title, setTitle] = useState(goal.title)
  const [description, setDescription] = useState(goal.description)
  const [isOpen, setIsOpen] = useState(false)
  const { updateGoal } = useContext(GoalsContext)
  const contentRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = `70px`
    } else {
      contentRef.current.style.height = '0px'
    }
  }, [isOpen])

  const handleBlurInputs = () => {
    if (title === goal.title && description === goal.description) return
    updateGoal(project_id, goal.goal_id, title, description)
  }

  return (
    <div className='flex flex-col w-full overflow-hidden transition-all duration-500'>
      <section
        className={`flex w-full justify-between items-center p-4 bg-gray-700  ${
          isOpen
            ? 'rounded-t-lg'
            : 'rounded-lg transition-all delay-400 duration-300 ease-out'
        } `}
      >
        <div className='flex gap-3'>
          <button onClick={() => setIsOpen(prev => !prev)}>
            <img
              src={ToggleArrow}
              alt='Open/Close Description'
              ref={toggleRef}
              className={` ${
                isOpen ? 'rotate-90' : 'rotate-0'
              } transition-all duration-300`}
            />
          </button>
          <input
            className='text-white outline-none bg-gray-700'
            onChange={e => setTitle(e.target.value)}
            onBlur={handleBlurInputs}
            value={title}
          />
        </div>
      </section>
      <section
        ref={contentRef}
        className={`flex ${
          isOpen ? 'px-4 pb-1' : 'null'
        } w-full bg-gray-700 rounded-b-lg overflow-hidden transition-all duration-500`}
        style={{ height: '0px' }}
      >
        <input
          className='text-white outline-none bg-gray-700'
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          onBlur={handleBlurInputs}
        />
      </section>
    </div>
  )
}

Goal.propTypes = {
  goal: PropTypes.shape({
    goal_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  project_id: PropTypes.string.isRequired
}
