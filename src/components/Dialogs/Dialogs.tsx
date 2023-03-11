import s from '../Dialogs/Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Messages} from './Message/Messages';
import {message} from 'antd';
import {MessagesType, DialogsType} from '../../redux/state';
import React from 'react';

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]

}


export const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map(m => <Messages message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </div>
    )
}