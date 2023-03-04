import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogType = {
    name: string
    id: number
}

type MessageType = {
    title: string
}

const DialogItem = (props: DialogType) => {
    let path = '/dialogs/' + props.id
 return <div className={s.dialog}>
     <NavLink to={path}>{props.name}</NavLink>
 </div>
}

export const Messages = (props: MessageType) => {
    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Alloha'}
    ]

return (
    <div className={s.message}>{props.title}</div>
)
}

export const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Oleg'}
    ]

    let dialogsElements = dialogsData.map ( dialog => {
        return (
        <DialogItem name={dialog.name} id={dialog.id} />
        )
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrew'} id={'2'}/>
                <DialogItem name={'Oleg'} id={'3'}/>
                {/*<div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>*/}
            </div>
            <div className={s.messages}>
                <Messages title={'Hi'} />
                <Messages title={'Hello'} />
                <Messages title={'Aloha'} />
            </div>

        </div>
    )
}