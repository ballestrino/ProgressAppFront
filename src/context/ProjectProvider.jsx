import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export const ProjectContext = createContext()

export default function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/projects')
      .then(res => setProjects(res.data))
  }, [])

  // CRUD

  const createProject = title => {
    axios
      .post('http://localhost:3000/projects', {
        title: title
      })
      .catch(err => console.log(err))
    refreshProjects()
  }

  const refreshProjects = () => {
    axios
      .get('http://localhost:3000/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.log(err))
  }

  const deleteProject = id => {
    axios.delete(`http://localhost:3000/projects/${id}`).then(res => {
      console.log(res)
      if (res.status === 200) {
        refreshProjects()
      } else console.error('Error deleting the project')
    })
  }

  const updateProject = (id, title) => {
    axios
      .put(`http://localhost:3000/projects/${id}`, {
        title: title
      })
      .then(res => {
        if (res.status === 200) {
          refreshProjects()
        } else console.error('Error updating the project')
      })
  }

  return (
    <ProjectContext.Provider
      value={{
        projects,
        setProjects,
        createProject,
        refreshProjects,
        deleteProject,
        updateProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired
}
