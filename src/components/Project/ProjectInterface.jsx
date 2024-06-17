import Project from './Project'
export default function ProjectInterface() {
  const project = {
    title: 'Project 1',
    progress: 50
  }
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <div className='flex flex-col w-2/5 h-screen py-20 gap-5'>
        <h1 className='text-4xl'>Projects</h1>
        <section className='grid grid-cols-1 gap-y-5'>
          <Project project={project} />
          <Project project={project} />
        </section>
      </div>
    </div>
  )
}
