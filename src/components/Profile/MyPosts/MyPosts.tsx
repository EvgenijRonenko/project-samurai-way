import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';


type MyPostsType = {
    posts: PostsType[]
}


export const MyPosts = (props: MyPostsType) => {

    const postElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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