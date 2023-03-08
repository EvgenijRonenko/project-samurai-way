import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/Post/ProfileInfo/ProfileInfo';

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfileType = {
    posts: PostsType[]
}

export const Profile = (props: ProfileType) => {


    return (<div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )

}