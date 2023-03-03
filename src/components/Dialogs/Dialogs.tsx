import s from '../Dialogs/Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogType = {
    name: string
    id: string
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

const Message = (props: MessageType) => {
return <div className={s.message}>{props.title}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrew'} id={'2'}/>
                <DialogItem name={'Oleg'} id={'3'}/>
                {/*<div className={s.dialog + ' ' + s.active}>*/}
                {/*    <NavLink to='/dialogs/1'>Dimych</NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={s.messages}>
                <Message title={'Hi'} />
                <Message title={'Hello'} />
                <Message title={'Alloha'} />
            </div>

        </div>
    )
}