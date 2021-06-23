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
            // setPost(res.data)
            setLoading(false)

        })
        .catch(err=>{
            setLoading(false)
            setPost(true)
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
style={{backgroundImage: "url('https://res.cloudinary.com/jane-s-fashion/image/upload/v1624410060/sogie02-3_w17ijd.png')", 
backgroundAttachment: "fixed", backgroundPosition:"center center"}}>
</BlogThumbnail>
{/* ${post.image} */}
<BlogContent className="max-w-6xl mx-auto w-full h-full  min-h-full py-4 px-4">
    
<Blogdescription className=' max-w-3xl h-full w-full mt-6 mb-6'>

<BlogContent className=' max-w-sm h-full w-full mt-6 mb-6 grid grid-cols-2 gap-4'>
<Postdate className='flex flex-col'>
<h1 className=" text-xl text-black font-medium">Published on:</h1>
<p className=" text-lg  text-gray-600 font-normal">

{/* {new Date(`${post.time}`).toDateString()} */}
{new Date(`2021-02-16T00:43:43.828940`).toDateString()} 


</p></Postdate>

<Postdate className='flex flex-col'>
<h1 className=" text-xl text-black font-medium">Written by:</h1>
<p className=" text-lg  text-gray-600 font-normal capitalize">
Austin
{/* {post.author} */}
</p></Postdate>
</BlogContent>
</Blogdescription>
<Blogtitletext className="max-h-96  mt-6 mb-6">

    <h1 className="lg:text-7xl xl:text-7xl text-4xl 2xl:text-7xl font-medium max-w-2xl">{post.title}</h1>
</Blogtitletext>



<BlogBody className='min-h-full h-full w-full'>
    <BlogText>
        {/* {post.content} */}
        <p>
            Last weekend, my design pal Catherine and I sat down and did a 90min design critique on Zoom, one of the most popular work-from-home apps these days. In this round of discussion, we focused on business use cases and formed our conversation around user experience and interface design of the latest Zoom application (Web, iOS version 5.4.9). Image for post Why business users choose Zoom Zoom now has around 265,400 customers with more than 10 employees. Despite the rising demands of online video services after Covid-19, it is attractive to institutions and business users mainly due to the following reasons: High quality: it provides a smooth online conferencing experience with the ability to hold meetings of up to 300 participants. Cost-effective: it provides affordable plans that are suitable for both big organizations and small startups. Convenience and accessibility: the platform is compatible with Mac, Windows, Linux, iOS, and Android, meaning nearly anyone with a digital/mobile device can access it. Setting up a meeting is just a click away, and joining a meeting only takes 1-2 steps. Cloud-based: it offers stable and reliable cloud services to help business users store, manage, and share cloud recordings, transcripts, and chat files. Collaboration: it delivers a wide range of features that allow the users to interact and collaborate with each other within the application. For business users, the main purpose of using Zoom is to have online business conversations. They usually have licensed/paid accounts that fall under their belonged institutions. Typically, they host or participate in pre-scheduled meetings, and expect to have smooth conversations on predefined topics or agenda. Depending on the meeting format and the level of engagement required, they may need interaction capabilities beyond basic audio and video chatting. Use case #1: Join a meeting Users can join a meeting by either opening the Zoom app to locate an upcoming one or clicking the meeting link via plugins such as Zoom for Microsoft Outlook and Zoom for Slack. Since business users usually have their Outlook/Slack opening on their work laptops, it’s convenient to enter a scheduled meeting when they receive notifications on the above work-related applications. We find Zoom always asks the users to review and approve the audio setting when joining the meeting, which is important since a smooth conversation is essential to an efficient and effective meeting. One thing that can be improved is to use more concise language in the title of the audio preview modal. Since it is apparent to users that they can only choose ONE option at a time using the segmentation control, there is no need to repeat the same information in the title.
        </p>
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
