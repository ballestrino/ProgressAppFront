import axios from 'axios'
import PropTypes from 'prop-types'
import { useState, createContext } from 'react'

export const GoalsContext = createContext()

export default function GoalsProvider({ children }) {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Empty', description: 'There is no goals' }
  ])

  const getGoals = async id => {
    await axios.get(`http://localhost:3000/goals/${id}`).then(res => {
      console.log(res, res.data)
      setGoals(res.data)
    })
  }

  const createGoal = async (project_id, title, description, completed) => {
    await axios
      .post('http://localhost:3000/goals', {
        project_id,
        title,
        description,
        completed
      })
      .then(res => {
        if (res.status !== 200) return alert('Failed to create')
        console.log(res)
      })
    setGoals([...goals, { title, description, completed }])
  }

  return (
    <GoalsContext.Provider value={{ goals, getGoals, createGoal }}>
      {children}
    </GoalsContext.Provider>
  )
}

GoalsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
