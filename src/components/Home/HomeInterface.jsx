import { Link } from 'react-router-dom'
export default function HomeInterface() {
  return (
    <div className='flex flex-col w-screen h-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center mb-12 h-1/2 w-1/2 gap-5'>
        <h1 className='text-4xl'>Project Manager</h1>

        <Link
          to='/projects'
          className='text-cyan-300 border-cyan-100 border-2 rounded-md px-14 py-4 text-center 
          hover:bg-cyan-300 hover:text-white transition duration-200 ease-in-out hover:scale-105
          '
        >
          Go to Your Projects
        </Link>
      </div>
    </div>
  )
}
