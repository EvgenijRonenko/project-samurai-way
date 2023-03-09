import s from '../Dialogs/Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Messages} from './Message/Messages';

type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

type DialogsPropsType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
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
        </div>
    )
}