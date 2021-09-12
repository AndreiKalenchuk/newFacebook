import {usersApi} from "../../api/api";

let initialState = {
    users: [],
    pageSize: 100,
    usersCount: null,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FETCHING = 'SET_FETCHING';
const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
const SET_FOLLOWING_IN_PROGRESS = 'SET_FOLLOWING_IN_PROGRESS';

const usReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                usersCount: action.usersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.boolean
            }

        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: action.boolean}
                    }
                    return user;
                })
            }

        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.boolean
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(user => user !== action.userId)]
            }

        default:
            return state
    }
}

const setUsers = (users) => ({type: SET_USERS, users});
const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, usersCount});
const toggleIsFetching = (boolean) => ({type: SET_FETCHING, boolean});
const setFollowUnfollowUser = (userId, boolean) => ({type: FOLLOW_UNFOLLOW, userId, boolean});
const toggleFollowingInProgress = (boolean, userId) => ({type: SET_FOLLOWING_IN_PROGRESS, boolean, userId});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
/** redux thunk creator  * */

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
//    dispatch(setCurrentPage(currentPage));
    usersApi.getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));
    })
}

export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersApi.followUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(setFollowUnfollowUser(userId, true));
        }
        dispatch(toggleFollowingInProgress(false, userId));
    })
}

export const unFollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersApi.unFollowUser(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(setFollowUnfollowUser(userId, false));
        }
        dispatch(toggleFollowingInProgress(false, userId));
    })
}


export default usReducer;
