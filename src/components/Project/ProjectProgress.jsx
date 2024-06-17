import PropTypes from 'prop-types'

export default function ProjectProgress({ progress }) {
  return (
    <div className='flex w-2/3 items-center justify-between gap-5 '>
      <div className='flex w-full select-none'>
        <div className=' flex items-center justify-center bg-gray-300 w-full relative rounded-lg h-4'>
          <div
            className='flex items-center justify-center absolute left-0 bg-cyan-300 h-4 text-white rounded-lg group-hover:bg-cyan-400 duration-300'
            style={{ width: `${progress}%` }}
          ></div>
          <p className='z-10 text-white font-semibold'>
            {progress ? `${progress}%` : ''}
          </p>
        </div>
      </div>
    </div>
  )
}

ProjectProgress.propTypes = {
  progress: PropTypes.number
}
