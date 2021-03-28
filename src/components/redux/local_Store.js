import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

const local_Store = {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default local_Store;
// local_Store OOP