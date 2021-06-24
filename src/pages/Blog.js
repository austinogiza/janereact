import axios from 'axios'
import React, {useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FailedNotification from '../components/FailedNotification'
import { blogList } from '../constants'
import { themes } from '../styles/ColorStyles'

const Blog = () => {

    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(null);
 
    const [loading, setLoading] = useState(false)


    const fetchData =()=>{
        setLoading(true)
        axios.get(blogList)
        .then(res=>{
            console.log(res.data)
            // setPosts(res.data)
            setLoading(false)
        })
        .catch(error=>{
            setError(error.message)
            setLoading(false)

        })
    }
    
     useEffect(()=>{
        fetchData()
       
        setLoading(false)
     }, [])

   


    return (
      <Blogcontainer className="max-w-6xl mx-auto h-full w-full flex flex-col py-4 px-4 mt-10 mb-10">

{error&& <FailedNotification text={error} title="Error"/>}

<Blogtitle className="mx-auto w-full flex flex-col">
<Blogh1 className="text-xl 2xl:text-5xl lg:text-5xl xl:text-5xl font-semibold my-4">Featured Posts</Blogh1>

<Blogsearch className='grid grid-cols-1 2xl:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5'>

{!loading && [1,2].map(res=>
    <Blogposts className='cursor-pointer  flex items-end  relative max-w-lg mx-auto h-96 py-4 px-4 w-full rounded-xl'>

<Blogdate  className='max-w-lg mx-auto h-full w-full max-h-96 rounded-xl absolute top-0 left-0 z-10 object-cover'>
<Blogimage className='h-full w-full rounded-xl max-h-96 ' src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624414507/Rectangle_26_khpiac.png" />
</Blogdate>
<Blogh2 className='relative z-40 mb-6 text-white text-xl font-medium'>This is a space for your blog headline, it can be long don’t worry about that</Blogh2>
<Blogtime className='rounded-xl absolute top-0  max-h-96 w-full h-full left-0 z-20 object-cover bg-black bg-opacity-25'/>
<Link className='rounded-xl absolute top-0  max-h-96 w-full h-full left-0 z-30 object-cover'/>
</Blogposts>

)}


</Blogsearch>
</Blogtitle>
<Blogcard className="mx-auto h-full min-h-full w-full flex flex-col mt-10">

<Blogh1 className="text-xl 2xl:text-5xl h-full min-h-full lg:text-5xl xl:text-5xl font-semibold my-4">Recent Posts</Blogh1>

<Blogsearch className='grid grid-cols-1 h-full min-h-screen 2xl:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
{!loading && [1,2,3,4,5,6].map(res=>
    <Blogposts className='cursor-pointer mt-4 flex items-end  relative max-w-lg mx-auto h-96 py-4 px-4 w-full rounded-xl'>
<Blogdate  className='max-w-lg mx-auto w-full rounded-xl absolute top-0 left-0  z-10 object-cover'>
<Blogimage className='h-full w-full rounded-xl  ' src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624414507/Rectangle_26_khpiac.png" />
<Blogh2 className='relative z-40 mb-6 text-black mt-4 text-xl font-medium'>This is a space for your blog headline, it can be long don’t worry about that</Blogh2>
<Link className='rounded-xl absolute top-0  w-full h-full left-0 z-30 object-cover'/>
</Blogdate>

</Blogposts>
)}



</Blogsearch>
</Blogcard>


      </Blogcontainer>
    )
}


const Blogsearch = styled.div`

`
const Blogcontainer = styled.div`

`
const Blogtitle = styled.div`
width:100%;


`
const Blogh1 = styled.h1`
color: ${themes.black};
`
const Blogcard = styled.div`

`
const Blogposts = styled.div`

`
const Blogimage = styled.img`

`
const Blogh2 = styled.h1`

`
const Blogp = styled.p`

`
const Blogtime = styled.div`

`
const Blogdate = styled.div`

`
const Blogposttime = styled.p`
`

export default Blog
