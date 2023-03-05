import s from '../Dialogs.module.css';

type MessageType = {
    message: string
    id: number
}

export const Messages = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}