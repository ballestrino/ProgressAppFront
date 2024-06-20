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
      .then(res => setProjects([...projects, res.data]))
      .catch(err => console.log(err))
  }

  const refreshProjects = () => {
    axios
      .get('http://localhost:3000/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.log(err))
  }

  const deleteProject = id => {
    axios.delete(`http://localhost:3000/projects/${id}`).then(res => {
      if (res.status === 200) {
        const newProjects = projects.filter(project => project.id !== id)
        setProjects(newProjects)
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
          const newProjects = projects.map(project =>
            project.id === id ? { ...project, title: title } : project
          )
          setProjects(newProjects)
        } else console.error('Error updating the project')
      })
  }

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  )
}

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired
}
