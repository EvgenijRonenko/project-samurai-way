import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/Post/ProfileInfo/ProfileInfo';
import {state} from '../../redux/state';

export const Profile = () => {


    return (<div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts}/>
        </div>
    )

}