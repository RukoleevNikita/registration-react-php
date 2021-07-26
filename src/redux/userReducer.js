const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const defaultState = {
    isAuth: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state
    }
}   

export const setUser = user => ({type: SET_USER});
export const logout = () => ({type: LOGOUT});