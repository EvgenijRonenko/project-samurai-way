import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';


export const Profile = () => {
    return (<div>
        <ProfileInfo />
        <div>
            <img src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042791_25.jpg"/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>
    )

}