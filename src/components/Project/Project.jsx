import PropTypes from 'prop-types'
import ProjectOptions from './ProjectOptions'
import ProjectProgress from './ProjectProgress'
import { useNavigate } from 'react-router'
export default function Project({ project }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/goals?id=${project.project_id}&title=${project.title}`)
  }
  return (
    <div
      className='flex justify-between bg-gray-700 rounded-lg p-4 group hover:bg-gray-600 transition duration-200 ease-in'
      onClick={handleClick}
    >
      <h2>{project.title}</h2>
      <ProjectProgress progress={project.progress} />
      <ProjectOptions project={project} />
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    project_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  }).isRequired
}
