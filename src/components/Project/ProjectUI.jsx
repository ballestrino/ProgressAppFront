import Project from './Project'
import { useContext } from 'react'
import { ProjectContext } from '../../context/ProjectProvider'

export default function ProjectUI() {
  const { projects } = useContext(ProjectContext)
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col w-2/5 h-screen py-20 gap-5'>
        <h1 className='text-4xl'>Projects</h1>
        <section className='grid grid-cols-1 gap-y-5'>
          {projects.map(project => (
            <Project key={project.project_id} project={project} />
          ))}
        </section>
      </div>
    </div>
  )
}
