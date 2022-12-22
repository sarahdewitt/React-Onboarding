import { useEffect, useState } from 'react'
import Posts from '../components/Posts'
import Banner from '../components/Banner'
import Title from '../components/Title'

const NewsGrid = () => {
    const [posts, setPosts] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=9'

    const fetchAPI = () => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setPosts(json)
            console.log(json)
        })
    }

    useEffect(() => {
        return fetchAPI()
    }, [])

    return (
        <>
            <Banner /> 
            <div className='container mx-auto'>
                <Title />
                <div className='grid py-10 lg:grid-cols-3 gap-x-10 gap-y-10'>
                    <Posts posts={posts} />
                </div>
            </div>
        </>
    )
}

export default NewsGrid
