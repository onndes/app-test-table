import { FETCH_USERS, SET_LOADING, SET_USERS } from './usersActionType'

export const setUsers = (payload) => {
    return { type: SET_USERS, payload }
}

export const setLoading = (loading) => {
    return { type: SET_LOADING, loading }
}

export const fetchUsers = () => {
    return { type: FETCH_USERS }
}
