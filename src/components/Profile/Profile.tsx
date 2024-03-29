import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/Post/ProfileInfo/ProfileInfo';
import {PostsType} from '../../redux/state';

type ProfileType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}


export const Profile = (props: ProfileType) => {


    return (<div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     addPost={props.addPost}

            />
        </div>
    )

}