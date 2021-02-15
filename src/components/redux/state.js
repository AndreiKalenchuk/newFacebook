export const state = {
    profilePage: {
        posts: [
            {id: 1, msg: 'Hello, how are you been', likesCount: 2},
            {id: 2, msg: 'Pass a hammer to me, please', likesCount: 24},
            {id: 3, msg: 'Hello, I\'m Ok!', likesCount: 25},
            {id: 4, msg: 'Hello, initial commit', likesCount: 12}
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nastiya'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Vasily'},
            {id: 4, name: 'Ana'},
            {id: 5, name: 'Bedlla'},
        ],
        messages: [
            {id: 1, message: 'Yoou'},
            {id: 2, message: 'What is up?'},
            {id: 3, message: 'What ?'},
            {id: 4, message: 'Go'},
            {id: 4, message: 'Go home'},
        ],
    }
}

export const addPost = () => {
    const posts = state.profilePage.posts;
    let id = posts[posts.length - 1].id;
    const msg = {
        id: ++id,
        msg: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(msg);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

let rerenderEntireTree = () => {
    console.log('rerender');
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};