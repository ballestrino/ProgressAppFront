import { useContext, useEffect, useRef, useState } from 'react'
import { ProjectContext } from '../../context/ProjectProvider'
import PropTypes from 'prop-types'

export default function ProjectCreate({ creating, setCreating }) {
  const inputRef = useRef(null)
  const [newTitle, setNewTitle] = useState('')
  const { createProject, refreshProjects } = useContext(ProjectContext)

  useEffect(() => {
    if (creating) {
      inputRef.current.focus()
    }
  }, [creating])

  const handleCreate = e => {
    e.preventDefault()
    if (newTitle) {
      createProject(newTitle)
      setCreating(false)
      refreshProjects()
    }
    console.log('executed')
  }
  return (
    <form
      className='flex group: justify-between bg-gray-700 rounded-lg p-4 group hover:bg-gray-600 transition duration-200 ease-in'
      onSubmit={e => handleCreate(e)}
    >
      <input
        ref={inputRef}
        type='text'
        className='outline-none bg-gray-700 group-hover:bg-gray-600 transition duration-200 ease-in'
        autoFocus
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
      />
      <button type='submit'>create</button>
    </form>
  )
}

ProjectCreate.propTypes = {
  creating: PropTypes.bool,
  setCreating: PropTypes.func
}
