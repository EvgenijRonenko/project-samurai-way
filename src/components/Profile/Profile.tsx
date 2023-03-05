import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/Post/ProfileInfo/ProfileInfo';



export const Profile = () => {
    const Posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 1},
        {id: 2, message: 'It\'s my first post', likesCount: 23}
    ]

    return (<div>
            <ProfileInfo/>
            <MyPosts posts={Posts}/>
        </div>
    )

}