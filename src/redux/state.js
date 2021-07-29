

let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 0 },
                { id: 2, message: "It's my first post!", likesCount: 9 },
            ],
            newPostText: 'PavelWebDeveloper',
    
    
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'how are you Pavel' },
                { id: 3, message: 'Hello man!' },
                { id: 4, message: 'yo!' },
                { id: 5, message: 'yo!' },
            ],
            dialogs: [
                { id: 1, name: 'Pavel' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Victor' },
                { id: 5, name: 'Valera' },
            ],
        },
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}


window.store = store





export default store;