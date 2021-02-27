import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { blogDetail } from '../constants'
import Loading from '../components/Loading'




const BlogDetail = () => {

    const [post, setPost] = useState(null)

    const [loading, setLoading] = useState(false)
    

    const { slug } = useParams()

    const fetchPost=()=>{
        setLoading(true)
        axios.get(blogDetail(slug))
        .then(res=>{
            setPost(res.data)
            setLoading(false)

        })
        .catch(err=>{
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchPost()
      
    }, [])
    return (
       <Blog>
       {loading && <Loading/>}
    
{post && (
<BlogMainBody>
    
<BlogThumbnail style={{backgroundImage: ` url(${post.image})`, backgroundAttachment: "fixed"}}>
<Blogdescription>

<Postdate>{new Date(`${post.time}`).toLocaleDateString()}</Postdate>
<PostTags>{post.tags}</PostTags>
</Blogdescription>
<Blogtitletext>{post.title}</Blogtitletext>
</BlogThumbnail>


<BlogBody>
    <BlogText>
        {post.content}
    </BlogText>
</BlogBody>

<Posted>
    <Posttitle>
        Posted By
    </Posttitle>
    <Author>{post.author}</Author>
</Posted>
</BlogMainBody>

)}
       </Blog>
    )
}


const Blog = styled.div`
min-height: 600px;
width: 100%;
`

const BlogMainBody = styled.div`
min-height: 600px;
width: 100%;

`
const BlogThumbnail = styled.div`
width: 100%;
height: 600px;
display: flex;
margin: 0 0 32px 0;
justify-content:center;
background-position: center center;
will-change: transform; 
transform: translate3d(0px, -1.755%, 0px) scale3d(1.11755, 1.11755, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;
align-items: center;
@media only screen and (max-widht: 650px){
    height: 300px;    
}
`


const Blogtitletext = styled.div``
const Blogdescription = styled.div``
const Author = styled.div``
const Postdate = styled.div``
const BlogBody = styled.div`
min-height: 600px;
max-width: 1100px;
margin: 0 auto;
width: 100%;
padding: 10px 15px;
`
const BlogText = styled.p`
font-size: 17px;
line-height: 24px;
text-align: justify;

`
const PostTags =  styled.div``

const Posted = styled.div`

`
const Posttitle = styled.div`

`
export default BlogDetail
