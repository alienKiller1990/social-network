

import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink activeClassName={s.activeLink} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}


const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name="Pavel" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Victor" id="4"/>
                <DialogItem name="Valera" id="5"/>

            </div>

            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="how are you Pavel"/>
                <Message message="Hello man!"/>

            </div>

        </div>
    )
}

export default Dialogs;