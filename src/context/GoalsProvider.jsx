import axios from 'axios'
import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

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

  return (
    <GoalsContext.Provider value={{ goals, getGoals }}>
      {children}
    </GoalsContext.Provider>
  )
}

GoalsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
