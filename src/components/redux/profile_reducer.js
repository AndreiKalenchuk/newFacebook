const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, msg: 'Hello, how are you been', likesCount: 2},
        {id: 2, msg: 'Pass a hammer to me, please', likesCount: 24},
        {id: 3, msg: 'Hello, I\'m Ok!', likesCount: 25},
        {id: 4, msg: 'Hello, initial commit', likesCount: 12}
    ],
    newPostText: null,
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const posts = state.posts;
            let id = posts[posts.length - 1].id;
            const msg = {
                id: ++id,
                msg: state.newPostText,
                likesCount: 0
            }
            state.posts.push(msg);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;