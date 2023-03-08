import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
   posts: PostsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postElements = props.posts.map(p => <Post posts={props.posts}/>)

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>New post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}