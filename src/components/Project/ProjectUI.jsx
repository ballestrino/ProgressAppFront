import Project from './Project'
import { useContext, useState } from 'react'
import { ProjectContext } from '../../context/ProjectProvider'
import ProjectCreate from './ProjectCreate'

export default function ProjectUI() {
  const [creating, setCreating] = useState(false)
  const { projects } = useContext(ProjectContext)
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col w-2/5 h-screen py-20 gap-5'>
        <section className='flex justify-between'>
          <h1 className='text-4xl'>Projects</h1>
          {!creating ? (
            <button onClick={() => setCreating(true)}>+</button>
          ) : null}
        </section>
        <section className='grid grid-cols-1 gap-y-5'>
          {creating ? (
            <ProjectCreate setCreating={setCreating} creating={creating} />
          ) : null}
          {projects.map(project => (
            <Project key={project.project_id} project={project} />
          ))}
        </section>
      </div>
    </div>
  )
}
