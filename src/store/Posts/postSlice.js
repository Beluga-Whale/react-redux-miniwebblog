import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        title: "Learning Redux Toolkit",
        content: "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more. The Redux DevTools make it easy to trace when, where, why, and how your application's state changed. Redux's architecture lets you log changes, use 'time-travel debugging', and even send complete error reports to a server. Redux works with any UI layer, and has a large ecosystem of addons to fit your needs."
    },

    {
        id: '2',
        title: "ReactJS",
        content: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug. Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native."
    },
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, { payload }) {
                state.push(payload)
            },
            prepare(title, content, id){
                return {
                    payload:{
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})

export const getAllPosts = (state) => state.posts

export const { addPost } = postSlice.actions

export default postSlice.reducer