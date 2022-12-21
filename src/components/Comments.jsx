import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Comments = () => {
    const [comments, setComments] = useState([])
    const { id } = useParams()

    const url = `https://jsonplaceholder.typicode.com/post/${id}/comments`

    const fetchAPI = () => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setComments(json)
            console.log(json)
        })
    }

    useEffect(() => {
        return fetchAPI()
    }, [])

  return (
    <>
        <h1 className='text-2xl font-bold text-indigo-900 lg:text-3xl pb-5'>Comment ({comments.length})</h1>
        <input type='text' placeholder='Email' className='rounded border-indigo-900 bg-zinc-100 w-3/4 lg:w-2/4'></input>
            <div className='divide-y divide-gray-300 mx-10 text-justify lg:mx-20'>
                {comments.map(comment =>(
                    <div className='py-5 lg:py-10'>
                        <p className='font-bold mb-3'>{comment.email}</p>
                        <p className='text-gray-500'>{comment.body}</p>
                    </div>
                ))}
            </div>
    </>
  )
}

export default Comments
