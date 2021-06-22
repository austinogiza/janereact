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
<BlogMainBody className="w-full h-auto min-h-0 flex flex-col">
    
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
