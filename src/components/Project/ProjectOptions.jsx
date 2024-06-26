import { useState, useRef, useEffect } from 'react'
import DotsSvg from '../../assets/icons/threeDots.svg'
import OptionsDropdown from './OptionsDropdown.jsx'
import PropTypes from 'prop-types'

export default function ProjectOptions({ project }) {
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    const handleClickOutside = e => {
      if (!refBox.current.contains(e.target) && showOptions) {
        setShowOptions(false)
      } else {
        return
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [showOptions])

  const refBox = useRef(null)

  const handlePropagation = e => {
    e.stopPropagation()
  }

  return (
    <div
      className='flex justify-center items-center relative z-10'
      ref={refBox}
      onClick={handlePropagation}
    >
      <button
        className=''
        onClick={() => setShowOptions(prev => (prev ? false : true))}
      >
        <img src={DotsSvg} alt='Options' className='h-5' />
      </button>
      {showOptions ? (
        <OptionsDropdown
          project={project}
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
      ) : null}
    </div>
  )
}

ProjectOptions.propTypes = {
  project: PropTypes.shape({
    project_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  }).isRequired
}
