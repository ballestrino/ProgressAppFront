import { useState } from 'react'
import DotsSvg from '../../assets/threeDots.svg'
import OptionsDropdown from './OptionsDropdown.jsx'

export default function ProjectOptions() {
  const [showOptions, setShowOptions] = useState(false)
  return (
    <div className='flex justify-center items-center relative'>
      <button
        className=''
        onClick={() => setShowOptions(prev => (prev ? false : true))}
      >
        <img src={DotsSvg} alt='Options' className='h-5' />
      </button>
      {showOptions ? <OptionsDropdown /> : null}
    </div>
  )
}
