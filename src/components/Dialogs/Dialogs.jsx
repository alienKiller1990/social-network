

import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';




const Dialogs = (props) => {
    

    let dialogsElements = props.state.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });

    let messagesElements = props.state.messages.map(el => {
        return <Message message={el.message} />
    });

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.textarea}>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;