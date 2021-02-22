const store = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('rerender');
    },
    addPost() {
        const posts = this._state.profilePage.posts;
        let id = posts[posts.length - 1].id;
        const msg = {
            id: ++id,
            msg: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(msg);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this.state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
export default store;
