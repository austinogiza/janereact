import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { blogDetail } from '../constants'
import Loading from '../components/Loading'
import Message from '../components/Message'



const BlogDetail = () => {

    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    

    const { slug } = useParams()

    useEffect(() => {

        async function fetchData(){
            setLoading(true)
            try {
                const res = await axios.get(blogDetail(slug));
                console.log(res.data)
                setPost(res.data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
                
            }
            
        }
        fetchData()
    }, [])
    return (
       <Blog>
       {loading && <Loading/>}
       {error && <Message/>}

{post && (

    <p>{post.title}</p>
)}
       </Blog>
    )
}


const Blog = styled.div`
min-height: 600px;
width: 100%;
`

export default BlogDetail
