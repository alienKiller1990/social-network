
import { rerenderEntireTree } from './../render'


let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 0 },
            { id: 2, message: "It's my first post!", likesCount: 9 },
            { id: 3, message: "It's cool", likesCount: 34 },
                ],
        
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
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
};

export default state;