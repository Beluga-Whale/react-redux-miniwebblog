import React from 'react'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../store/Posts/postSlice'
import './ShowPost.scss'

const ShowPosts = () => {
    const allPost = useSelector(getAllPosts)

    return (
        <div className='container' >
            <div className="post">
                {allPost.map((post, index) => (
                    <div className="post-card" key={index}>
                        <h1>{post.title}</h1>
                        <p>{post.content.substring(0, 150)}...</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShowPosts