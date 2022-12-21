import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  const img = 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
  
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-md pb-3 rounded-lg bg-white mx-auto'>
        <div className='relative'>
          <img src={img} alt='' className='rounded-t-lg w-full' />
          <div className='absolute bottom-0 right-0 p-3'>
          <span className='bg-indigo-900 bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-white'>News</span>
          </div>
          </div>
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2 line-clamp-1'>{post.title}</div>
            <p className='text-gray-700 text-base line-clamp-2'>
              {post.body}
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <Link className='text-base font-bold text-indigo-900 cursor-pointer' to={`/post/${post.id}`}>Read more</Link>
          </div>
    </div>
  )
}

export default Post
