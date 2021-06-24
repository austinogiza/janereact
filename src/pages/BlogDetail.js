import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { blogDetail } from '../constants'
import Loading from '../components/Loading'
import { secondaryButton } from '../styles/Button'




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
       <Blog className="w-full h-auto min-h-0 flex flex-col">
       {loading && <Loading/>}
    
{post && (

<BlogMainBody className="w-full h-auto min-h-0 flex flex-col">
    
<BlogThumbnail className="w-full  max-h-96 h-96 min-h-0 flex flex-col" 
style={{backgroundImage: `url(${post.image})`, 
backgroundAttachment: "fixed", backgroundPosition:"center center"}}>
</BlogThumbnail>

<BlogContent className="max-w-6xl mx-auto w-full h-full  min-h-full py-4 px-4">
    
<Blogdescription className=' max-w-3xl h-full w-full mt-6 mb-6'>

<BlogContent className=' max-w-sm h-full w-full mt-6 mb-6 grid grid-cols-2 gap-4'>
<Postdate className='flex flex-col'>
<h1 className=" text-xl text-black font-medium">Published on:</h1>
<p className=" text-lg  text-gray-600 font-normal">{new Date(`${post.time}`).toDateString()}</p></Postdate>

<Postdate className='flex flex-col'>
<h1 className=" text-xl text-black font-medium">Written by:</h1>
<p className=" text-lg  text-gray-600 font-normal capitalize">{post.author}</p></Postdate>
</BlogContent>
</Blogdescription>
<Blogtitletext className="max-h-96  mt-6 mb-6">

    <h1 className="lg:text-7xl xl:text-7xl text-4xl 2xl:text-7xl font-medium max-w-2xl">{post.title}</h1>
</Blogtitletext>



<BlogBody className='min-h-full h-full w-full'>
    <BlogText className='px-4'>
        {post.content}
        </BlogText>
</BlogBody>
</BlogContent>
</BlogMainBody>

)}

<Posted className=" bg-blue-50 w-full min-h-full  h-full mt-10 mb-10 py-4 px-4">
   <BlogContent className="mx-auto max-w-6xl w-full h-full  flex flex-col py-4 px-4">
   <Posttitle className="h-full w-full flex lg:flex-row 2xl:flex-row flex-col mt-5 mb-6 justify-between">
<Postdetails className="h-full w-full my-2">
<h1 className="text-2xl lg:text-4xl 2xl:text-4xl xl:text-4xl font-medium text-black whitespace-nowrap"> Latest posts</h1>
</Postdetails>
<Postdetails className="whitespace-nowrap my-2">
<Postbutton>Browse Blog</Postbutton>
</Postdetails>
</Posttitle>
<PostTags className="grid gap-4 grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3">
<Link className='absolute object-cover top-0 left-0 w-full h-full z-10' to='/'/>
    <Author className="max-w-md w-full h-full max-h-96 flex flex-col relative my-4">
    <Authorimage className="h-full my-4  max-h-60 w-full">
    <Authorimg className="w-full h-full max-h-60" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313709/959cc9cd-a01b-48c4-9da5-be29fbcdea9a_pzyqib.jpg"/>
    </Authorimage>
    <Postdate className='w-full h-full'>
<h4 className='font-medium  text-base my-2 text-gray-500 w-full'>Lorem ipsum dolor sit.</h4>
<h1 className=' font-semibold text-lg text-black  w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, repellendus?</h1>
            </Postdate>  

    </Author>
    <Author className="max-w-md w-full h-full max-h-96 flex flex-col relative my-4">
    <Authorimage className="h-full my-4  max-h-60 w-full">
    <Authorimg className="w-full h-full max-h-60" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313709/959cc9cd-a01b-48c4-9da5-be29fbcdea9a_pzyqib.jpg"/>
    </Authorimage>
    <Postdate className='w-full h-full'>
<h4 className='font-medium  text-base my-2 text-gray-500 w-full'>Lorem ipsum dolor sit.</h4>
<h1 className=' font-semibold text-lg text-black  w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, repellendus?</h1>
            </Postdate>  

    </Author>
    <Author className="max-w-md w-full h-full max-h-96 flex flex-col relative my-4">
    <Authorimage className="h-full my-4  max-h-60 w-full">
    <Authorimg className="w-full h-full max-h-60" src="https://res.cloudinary.com/jane-s-fashion/image/upload/v1624313709/959cc9cd-a01b-48c4-9da5-be29fbcdea9a_pzyqib.jpg"/>
    </Authorimage>
    <Postdate className='w-full h-full'>
<h4 className='font-medium  text-base my-2 text-gray-500 w-full'>Lorem ipsum dolor sit.</h4>
<h1 className=' font-semibold text-lg text-black  w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, repellendus?</h1>
            </Postdate>  

    </Author>
    </PostTags>
 
   </BlogContent>
</Posted>
       </Blog>
    )
}


const Blog = styled.div`

`
const Postdetails= styled.div``
const Postbutton= styled(secondaryButton)``
const Authorimage = styled.div``
const Authorimg = styled.img``
const BlogContent = styled.div``
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


`
const BlogText = styled.div`
p{
    font-size: 17px;
line-height: 1.6;
text-align: left;
}
h1{
    font-size: 24px;
line-height: 1.6;
text-align: left;
}
`
const PostTags =  styled.div``

const Posted = styled.div`

`
const Posttitle = styled.div`

`
export default BlogDetail
