import PropTypes from 'prop-types'
import { ProjectContext } from '../../context/ProjectProvider'
import { useContext, useRef, useState } from 'react'

export default function ProjectEdit({ project }) {
  const { updateProject } = useContext(ProjectContext)
  const [newTitle, setNewTitle] = useState(project.title)
  const inputRef = useRef(null)

  const handlePropagation = e => {
    e.stopPropagation()
  }

  const handleConfirm = () => {
    if (newTitle === project.title) return // performance
    updateProject(project.project_id, newTitle)
  }

  return (
    <>
      <div onClick={handlePropagation} className='flex '>
        <input
          ref={inputRef}
          className='outline-none bg-gray-700 group-hover:bg-gray-600 transition-all duration-200 ease-in'
          type='text'
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          onBlur={handleConfirm}
        />
      </div>
    </>
  )
}

ProjectEdit.propTypes = {
  project: PropTypes.shape({
    project_id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired
  }).isRequired
}
