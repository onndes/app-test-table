import {
    ADD_USERS,
    DELETE_USERS,
    DELETE_USER_IDS,
    EDIT_USERS,
    SET_ERROR,
    SET_STATUS,
    SET_USERS,
} from './usersActionType'

const users = JSON.parse(window.sessionStorage.getItem('users'))

const initialState = {
    users: users || [],
    deletedUserIds: [],
    error: {
        fetchUser: null,
        addUser: null,
        deleteUser: null,
        editUser: null,
    },
    status: {
        fetchUser: null,
        addUser: null,
        deleteUser: null,
        editUser: null,
    },
}

const usersReducer = (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case SET_USERS:
            return {
                ...state,
                users: payload,
            }
        case ADD_USERS:
            return {
                ...state,
                users: [...state.users, payload],
            }
        case SET_STATUS:
            return {
                ...state,
                status: { ...state.status, [payload.action]: payload.status },
            }
        case SET_ERROR:
            return {
                ...state,
                error: { ...state.error, [payload.action]: payload.error },
            }
        case EDIT_USERS:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === payload.id) {
                        return payload
                    }
                    return user
                }),
            }
        case DELETE_USERS:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== payload),
            }
        case DELETE_USER_IDS:
            // eslint-disable-next-line no-case-declarations
            const isId = state.deletedUserIds.find((id) => id === payload)
            if (isId) {
                return {
                    ...state,
                    deletedUserIds: state.deletedUserIds.filter(
                        (id) => id !== isId
                    ),
                }
            }
            return {
                ...state,
                deletedUserIds: [...state.deletedUserIds, payload],
            }

        default:
            return state
    }
}

export default usersReducer
