import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { addPost } from '../../store/Posts/postSlice'
import './AddedPost.scss'

const AddedPost = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onchangeTitle = e => setTitle(e.target.value)
    const onchangeContent = e => setContent(e.target.value)

    const addedPost = () => {
        if (title && content) {
            dispatch(
                addPost(title, content, nanoid())
            )

            setTitle('')
            setContent('')
        }

    }


    return (
        <div className='Add-post'>

            <h1>Post</h1>
            <form className='form-add' >

                <div className="flex-item">
                    <label >Post Title: </label>
                    <input
                        type="text"
                        placeholder='Input The Title'
                        onChange={onchangeTitle}
                    />
                </div>

                <div className="flex-item">
                    <label >Post Content: </label>
                    <textarea
                        type="text"
                        placeholder='Input The Content'
                        onChange={onchangeContent}
                    />
                </div>

                {title && content ? <button
                    type='button'
                    onClick={addedPost}
                >AddPost</button>: <div></div> }
            </form>

        </div>
    )
}

export default AddedPost