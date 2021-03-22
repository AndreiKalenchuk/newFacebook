const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, msg: 'Hello, how are you been', likesCount: 2},
                {id: 2, msg: 'Pass a hammer to me, please', likesCount: 24},
                {id: 3, msg: 'Hello, I\'m Ok!', likesCount: 25},
                {id: 4, msg: 'Hello, initial commit', likesCount: 12}
            ],
            newPostText: null,
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
            newMessageBody: '',
        }
    },
    _callSubscriber() {
        console.log('rerender');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {  // action is { type: 'ADD-POST'}
        if (action.type === actions.ADD_POST) {
            const posts = this._state.profilePage.posts;
            let id = posts[posts.length - 1].id;
            const msg = {
                id: ++id,
                msg: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(msg);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === action.UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === actions.UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === actions.SEND_MESSAGE) {
            const messages = this._state.dialogsPage.messages;
            let id = messages[messages.length - 1].id;
            const msg = {
                id: ++id,
                message: this._state.dialogsPage.newMessageBody,
                likesCount: 0
            }
            this._state.dialogsPage.messages.push(msg);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }

        return action;
    }
}

const actions = {
    ADD_POST: 'ADD-POST',
    UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT',
    UPDATE_NEW_MESSAGE_BODY: 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE: 'SEND-MESSAGE'
}

export const addPostActionCreator = () => ({type: actions.ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
    type: actions.UPDATE_NEW_POST_TEXT, newText: text
})
export const sendMessageCreator = () => ({type: actions.SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: actions.UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;
// store OOP