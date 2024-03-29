import {usersApi} from "../../api/api";

let initialState = {users: [], pageSize: 100, usersCount: null, currentPage: 1, isFetching: false};

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS: {
            return {...state, users: [...action.users]};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, usersCount: action.usersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

const setFollowUser = (userId) => ({type: FOLLOW, userId});
const setUnFollowUser = (userId) => ({type: UNFOLLOW, userId});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

const setUsers = (users) => ({type: SET_USERS, users});
const setUsersTotalCount = (usersCount) => ({type: SET_USERS_TOTAL_COUNT, usersCount});
const setToggledIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

/** redux thunk creator  * */
export const getUsers = (currentPage, count) => (dispatch) => {
    dispatch(setToggledIsFetching(true));
    usersApi.getUsers(currentPage, count)
        .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount));
                dispatch(setToggledIsFetching(false));
            }
        )
        .catch(err => console.log(err));
}

export const followUser = (userId) => (dispatch) => {
    usersApi.followUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setFollowUser(userId));
            }
        })
        .catch(err => console.log(err));
}

export const unFollowUser = (userId) => (dispatch) => {
    usersApi.unFollowUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUnFollowUser(userId));
            }
        })
        .catch(err => console.log(err));
}


export default usersReducer;
