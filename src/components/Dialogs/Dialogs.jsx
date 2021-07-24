

import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';





const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Pavel' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Victor' },
        { id: 5, name: 'Valera' },
    ];

    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'how are you Pavel' },
        { id: 3, message: 'Hello man!' },
        { id: 4, message: 'yo!' },
        { id: 5, message: 'yo!' },
    ];


    let dialogsElements = dialogsData.map(dialog => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });

    let messagesElements = messagesData.map(el => {
        return <Message message={el.message} />
    });

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

export default Dialogs;