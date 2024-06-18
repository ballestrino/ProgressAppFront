import { useState, useRef, useEffect } from 'react'
import DotsSvg from '../../assets/threeDots.svg'
import OptionsDropdown from './OptionsDropdown.jsx'

export default function ProjectOptions() {
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

  return (
    <div className='flex justify-center items-center relative' ref={refBox}>
      <button
        className=''
        onClick={() => setShowOptions(prev => (prev ? false : true))}
      >
        <img src={DotsSvg} alt='Options' className='h-5' />
      </button>
      {showOptions ? (
        <OptionsDropdown
          showOptions={showOptions}
          setShowOptions={setShowOptions}
        />
      ) : null}
    </div>
  )
}
