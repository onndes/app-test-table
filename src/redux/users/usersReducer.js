import { SET_USERS } from './usersActionType'

const initialState = {
    users: [],
    isLoading: false,
    error: null,
}

const usersReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case SET_USERS:
            return {
                ...state,
                users: [...payload],
            }

        default:
            return state
    }
}

export default usersReducer
