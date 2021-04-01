const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const INCREASE_LIKES_COUNT = 'INCREASE-LIKE-COUNT';

const initialState = {
    posts: [
        {id: 0, msg: 'Hello, how are you been', likesCount: 2},
        {id: 1, msg: 'Pass a hammer to me, please', likesCount: 24},
        {id: 2, msg: 'Hello, I\'m Ok!', likesCount: 25},
        {id: 3, msg: 'Hello, initial commit', likesCount: 12}
    ],
    newPostText: '',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newState = {...state};
            if (state.posts.length === 0) {
                newState.posts = [...state.posts, {id: 0, msg: newState.newPostText, likesCount: 0}];
            } else {
                let id = state.posts[state.posts.length - 1].id;
                const msg = {
                    id: ++id,
                    msg: newState.newPostText,
                    likesCount: 0
                }
                newState.posts = [...state.posts, msg];
            }
            newState.newPostText = '';
            return newState;
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case INCREASE_LIKES_COUNT:
            let newState = {
                posts: [...state.posts]
            }
            newState.posts[action.index].likesCount += 1;
            return newState
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const increaseLikeCountActionCreator = (index) => ({type: INCREASE_LIKES_COUNT, index: index});

export default profileReducer;