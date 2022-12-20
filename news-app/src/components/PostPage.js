import { FaChevronLeft } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from './img/img1.jpg'

const PostPage = () => {
    const [comments, setComments] = useState([])
    const [email, setEmail] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/comments?_limit=4'

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => setComments(data))
    })

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => setEmail(data))
    })

  return (
    <div className='px-5 lg:px-60 py-16'>
      <Link to='/' className='flex flex-nowrap font-bold items-center'>
        <FaChevronLeft style={{ cursor: 'pointer' }} />
        <p className='pl-1.5'>Back</p>
      </Link>
      <h1 className='text-2xl py-5 font-bold text-indigo-900 lg:text-4xl py-10'>Lorem ipsum dolor sit amet</h1>
      <img src={img1} alt='' className='mx-auto py-6 w-full lg:w-3/4' />
      <p className='py-5 text-justify text-zinc-800 lg:py-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar velit nec mi hendrerit, ut scelerisque nunc placerat. Duis pellentesque lectus id nisi lobortis, sed pretium tortor euismod. Praesent blandit euismod mi, in ultricies velit dictum quis. Nulla a gravida justo. Ut gravida et velit a rhoncus. Mauris elementum velit non urna bibendum, quis sagittis mauris varius. Phasellus porttitor sagittis nisi, accumsan tristique mauris rutrum non. Integer gravida, est eu porttitor lacinia, velit erat efficitur nulla, tempor pulvinar massa urna nec eros. Suspendisse consectetur, tortor volutpat sollicitudin molestie, urna metus commodo quam, in tristique tortor dolor eu velit. Pellentesque semper at arcu quis molestie. Duis interdum a purus ac vulputate. Morbi vehicula lobortis massa ut lacinia. Quisque sit amet maximus est.
        <br></br>
        <br></br>
        In hac habitasse platea dictumst. Mauris interdum lectus quis ante ornare, scelerisque scelerisque massa ornare. Duis mi mi, dictum et ex vitae, vestibulum ultricies orci. In lacus est, tristique sed dui at, suscipit pellentesque lacus. Aliquam vitae interdum metus, maximus elementum ex. Aliquam erat volutpat. In eget commodo turpis. Mauris vel nunc nec nulla sodales luctus. Pellentesque ac velit facilisis, dictum ante at, efficitur felis. Cras lacinia tortor ac turpis volutpat iaculis. Duis eros felis, congue et nisi porta, interdum pellentesque est. Donec ornare tincidunt tortor quis elementum. Pellentesque placerat ac quam eget faucibus. Suspendisse convallis risus et orci maximus, ac maximus nulla ornare. Mauris convallis lorem nisi, et commodo nisl imperdiet sit amet. Nulla placerat viverra est vel efficitur.
      </p>
      <hr class='my-5 h-px bg-gray-200 border-0 dark:bg-gray-600'></hr>
      <span className=''></span>
      <h1 className='text-2xl font-bold text-indigo-900 lg:text-3xl pb-5'>Comment ({email.length})</h1>
      <input type='text' placeholder='Email' className='rounded border-indigo-900 bg-zinc-100 w-3/4 lg:w-2/4'></input>
        <div className='divide-y divide-gray-300 mx-10 text-justify lg:mx-20'>
            {comments.map(comment =>(
                <div className='py-5 lg:py-10'>
                    <p className='font-bold mb-3'>{comment.email}</p>
                    <p className='text-gray-500'>{comment.body}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PostPage
