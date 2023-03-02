import s from '../Dialogs/Dialogs.module.css';



export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Oleg
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Hey!</div>
                <div className={s.message}>How are you?</div>
            </div>

        </div>
    )
}