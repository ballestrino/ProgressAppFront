import PropTypes from 'prop-types'

export default function Goal({ goal }) {
  return (
    <div className='flex w-full justify-between items-center bg-gray-700 rounded-lg'>
      <h2 className='text-white p-4'>{goal.title}</h2>
    </div>
  )
}

Goal.propTypes = {
  goal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}
