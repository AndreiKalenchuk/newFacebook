const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const INCREASE_LIKES_COUNT = 'INCREASE-LIKE-COUNT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {id: 0, msg: 'Hello, how are you been', likesCount: 2},
        {id: 1, msg: 'Pass a hammer to me, please', likesCount: 24},
        {id: 2, msg: 'Hello, I\'m Ok!', likesCount: 25},
        {id: 3, msg: 'Hello, initial commit', likesCount: 12}
    ],
    newPostText: '',
    profile: null
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
                ...state,
                posts: [...state.posts]
            }
            newState.posts[action.index].likesCount += 1;
            return newState
        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}
export const addNewPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const increaseLikeCount = (index) => ({type: INCREASE_LIKES_COUNT, index: index});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;