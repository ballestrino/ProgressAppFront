import PropTypes from 'prop-types'
import ProjectOptions from './ProjectOptions'
import ProjectProgress from './ProjectProgress'
export default function Project({ project }) {
  return (
    <div className='flex justify-between bg-gray-700 rounded-lg p-4 group hover:bg-slate-700 transition duration-200 ease-in'>
      <h2>{project.title}</h2>
      <ProjectProgress progress={project.progress} />
      <ProjectOptions />
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  }).isRequired
}
