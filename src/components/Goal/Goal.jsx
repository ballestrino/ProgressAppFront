import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ToggleArrow from '../../assets/icons/caret-right-fill.svg'

export default function Goal({ goal }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = `70px`
    } else {
      contentRef.current.style.height = '0px'
    }
  }, [isOpen])

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
          <h2 className='text-white'>{goal.title}</h2>
        </div>
      </section>
      <section
        ref={contentRef}
        className={`flex ${
          isOpen ? 'px-4 pb-1' : 'null'
        } w-full bg-gray-700 rounded-b-lg overflow-hidden transition-all duration-500`}
        style={{ height: '0px' }}
      >
        {goal.description}
      </section>
    </div>
  )
}

Goal.propTypes = {
  goal: PropTypes.shape({
    goal_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}
