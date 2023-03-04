import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div className={s.img}>
                <img src="https://krot.info/uploads/posts/2021-12/thumbs/1638614862_6-krot-info-p-romantichnii-peizazh-krasivie-foto-8.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

