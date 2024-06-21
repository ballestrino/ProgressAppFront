import PropTypes from 'prop-types'

export default function Option({ icon, text, onClick }) {
  return (
    <div
      className='flex gap-1 p-2 hover:bg-slate-700 rounded-md w-full'
      onClick={onClick}
    >
      <img src={icon} alt={text} />
      <p>{text}</p>
    </div>
  )
}

Option.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}
