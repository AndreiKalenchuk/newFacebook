import {profileApi, usersApi} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const INCREASE_LIKES_COUNT = 'INCREASE-LIKE-COUNT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    posts: [
        {id: 0, msg: 'Hello, how are you been', likesCount: 2},
        {id: 1, msg: 'Pass a hammer to me, please', likesCount: 24},
        {id: 2, msg: 'Hello, I\'m Ok!', likesCount: 25},
        {id: 3, msg: 'Hello, initial commit', likesCount: 12}
    ],
    profile: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newState = {...state};
            if (state.posts.length === 0) {
                newState.posts = [ {id: 0, msg: action.newPost, likesCount: 0}];
            } else {
                let id = state.posts[state.posts.length - 1].id;
                const msg = {
                    id: ++id,
                    msg: action.newPost,
                    likesCount: 0
                }
                newState.posts = [...state.posts, msg];
            }
            return newState;
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
        case SET_STATUS :
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
export const addNewPost = (newPost) => ({type: ADD_POST, newPost});
export const increaseLikeCount = (index) => ({type: INCREASE_LIKES_COUNT, index: index});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    usersApi.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data));
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data));
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export default profileReducer;