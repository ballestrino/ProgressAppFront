import moveUp from '../../assets/icons/moveUp.svg'
import moveDown from '../../assets/icons/moveDown.svg'
import deleteIcon from '../../assets/icons/trash.svg'
import editIcon from '../../assets/icons/pencil.svg'
import Option from './Option'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ProjectContext } from '../../context/ProjectProvider'

export default function OptionsDropdown({ project }) {
  const { deleteProject } = useContext(ProjectContext)

  return (
    <div className='flex flex-col absolute left-8 -top-4 h-fit w-max text-nowrap bg-slate-600 text-xs rounded-md'>
      <Option icon={editIcon} text='Edit' />
      <button onClick={() => deleteProject(project.project_id)}>
        <Option icon={deleteIcon} text='Delete' />
      </button>
      <Option icon={moveUp} text='Move Up' />
      <Option icon={moveDown} text='Move Down' />
    </div>
  )
}

OptionsDropdown.propTypes = {
  project: PropTypes.shape({
    project_id: PropTypes.number.isRequired
  }).isRequired
}
