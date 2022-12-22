import { FaChevronLeft } from 'react-icons/fa'
import Comments from '../components/Comments'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const InnerPage = () => {
    const [data, setData] = useState([])
    const { id } = useParams()

    const url = `https://jsonplaceholder.typicode.com/posts/${id}`

    const fecthAPI = () => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setData(json)
            console.log(json)
        })
    }

    useEffect(() => {
        return fecthAPI()
    }, [])

    const img = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'

  return (
    <div className='px-5 lg:px-60 py-16' key={data.id}>
      <Link to='/' className='flex flex-nowrap font-bold items-center'>
        <FaChevronLeft className='cursor-pointer' />
        <p className='pl-1.5'>Back</p>
      </Link>
      <h1 className='text-2xl py-5 font-bold text-indigo-900 lg:text-4xl py-10'>{data.title}</h1>
      <img src={img} alt='News Image' className='mx-auto py-6 w-full lg:w-3/4' />
      <p className='py-5 text-justify text-zinc-800 lg:py-10'>
        {data.body}
      </p>
      <hr class='my-5 h-px bg-gray-200 border-0 dark:bg-gray-600'></hr>
      <Comments />
      <hr class='my-5 h-0.5 bg-gray-300'></hr>
    </div>
  )
}

export default InnerPage
