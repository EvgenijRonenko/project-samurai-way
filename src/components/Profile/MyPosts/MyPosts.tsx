import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';


type MyPostsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}


export const MyPosts = (props: MyPostsType) => {

    const postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
 const postMessageRef = React.createRef<HTMLTextAreaElement>()
 const addPost = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
        }
 }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea ref={postMessageRef}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}