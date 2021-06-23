import axios from 'axios'
import React, {useEffect, useState}from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import FailedNotification from '../components/FailedNotification'
import Loading from '../components/Loading'

import { blogList } from '../constants'
import { themes } from '../styles/ColorStyles'
import { Caption, H2, H3} from '../styles/TextStyles'

const Blog = () => {

    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(false);
 
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
       
        setError(true)
     }, [])

   


    return (
      <Blogcontainer>

{error&& <FailedNotification text={error} title="Error"/>}

      <Blogsearch>


      </Blogsearch>
<Blogtitle>
<Blogh1>Recent Posts</Blogh1>
</Blogtitle>
<Blogcard>

{loading && <Loading/>}

 {posts && posts.map((post) => {
     return(
        <Link key={post.id} to={`/blog/${post.slug}`}> <Blogposts>
    <Blogimage src={`${post.image}`}/>
    <Blogh2>{post.title}</Blogh2>
    <Blogp>{post.intro}</Blogp>
    <Blogtime>
<Blogdate>{`${new Date(post.time).toDateString()}`}</Blogdate>

<Blogposttime>{`${new Date(post.time).toLocaleTimeString()}`}</Blogposttime>

    </Blogtime>


    </Blogposts>
    </Link> 

     )


 })}
</Blogcard>


      </Blogcontainer>
    )
}


const Blogsearch = styled.div`
height: 50px;
width:100%;
`
const Blogcontainer = styled.div`
min-height: 500px;
width:100%;
max-width: 1200px;
margin: 0 auto;
`
const Blogtitle = styled.div`
height: 50px;
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

`
const Blogh1 = styled(H2)`
color: ${themes.black};
`
const Blogcard = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-auto-rows: minmax(500px,auto);
grid-gap: 50px;
margin: 16px 0;
padding:10px 25px;

@media only screen and (max-width:550px){
    grid-template-columns: repeat(1,1fr);
grid-auto-rows: minmax(500px,auto);
grid-gap: 30px;
}
`
const Blogposts = styled.div`
color: ${themes.black};
height:100%;
width:100%;
transition: 0.3s ease-in;
:hover{

    transform: scale(1.01);
}

`
const Blogimage = styled.img`
height:400px;
width:100%;
`
const Blogh2 = styled(H3)`
margin: 8px 0;
font-weight: 500;
margin: 8px 0;

`
const Blogp = styled(Caption)`
margin: 8px 0;
color: ${themes.grey}
`
const Blogtime = styled.div`
margin: 8px 0;
height:50px;
width:100%;
display: flex;
align-items: flex-start;
`
const Blogdate = styled.p`
margin: 8px 8px 8px 0;
font-size: 13px;
font-weight: 400;

color: ${themes.grey};
`
const Blogposttime = styled.p`
margin: 8px;
font-weight: 400;
font-size: 13px;
color: ${themes.grey};
`

export default Blog
