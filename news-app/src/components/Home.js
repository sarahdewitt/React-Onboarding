import { useEffect, useState } from 'react'
import Posts from './Posts'
import Banner from './Banner'
import Header from './Header'

const Home = () => {
    const [posts, setPosts] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=9'

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => setPosts(data))
    })

  return (
    <>
        <Banner /> 
        <div className='px-14 lg:px-32'>
            <Header />
            <div className='grid py-10 lg:grid-cols-3 gap-x-10 gap-y-10'>
                <Posts posts={posts} />
            </div>
        </div>
    </>
  )
}

export default Home
