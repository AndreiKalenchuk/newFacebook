import {auth} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export const setUserAuthDataAC = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const authMe = () => (dispatch) => {
    auth.authMeApi()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, email, login} = data.data;
                dispatch(setUserAuthDataAC(id, email, login, true));
            }
        })
}

export const loginThunk = (email, password, rememberMe = false) => (dispatch) => {
    auth.login(email, password, rememberMe)
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(authMe());
                }
            }
        )
}

export const logout = () => (dispatch) => {
    auth.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuthDataAC(null, null, null, false));
            }
        })
}

export default authReducer;