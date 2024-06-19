import Project from './Project'
export default function ProjectInterface() {
  const project = [
    {
      id: 1,
      title: 'Project 1',
      progress: 50
    },
    {
      id: 2,
      title: 'Project 2',
      progress: 30
    },
    {
      id: 3,
      title: 'Project 3',
      progress: 70
    }
  ]
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col w-2/5 h-screen py-20 gap-5'>
        <h1 className='text-4xl'>Projects</h1>
        <section className='grid grid-cols-1 gap-y-5'>
          {project.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </section>
      </div>
    </div>
  )
}
