import {
    ADD_USERS,
    ASYNC_ADD_USERS,
    ASYNC_DELETE_USERS,
    ASYNC_EDIT_USERS,
    DELETE_USERS,
    DELETE_USER_IDS,
    EDIT_USERS,
    FETCH_USERS,
    SET_ERROR,
    SET_STATUS,
    SET_USERS,
} from './usersActionType'

export const setUsers = (payload) => ({ type: SET_USERS, payload })
export const asyncFetchUsers = () => ({ type: FETCH_USERS })
export const fetchUsers = () => ({ type: FETCH_USERS })
export const asyncAddUsers = (payload) => ({ type: ASYNC_ADD_USERS, payload })
export const addUsers = (payload) => ({ type: ADD_USERS, payload })
export const asyncEditUser = (payload) => ({ type: ASYNC_EDIT_USERS, payload })
export const editUser = (payload) => ({ type: EDIT_USERS, payload })
export const deletedUserIdsAction = (payload) => ({
    type: DELETE_USER_IDS,
    payload,
})
export const asyncDeleteUser = (payload) => ({
    type: ASYNC_DELETE_USERS,
    payload,
})
export const deleteUser = (payload) => ({ type: DELETE_USERS, payload })
export const setStatus = (action, status) => ({
    type: SET_STATUS,
    payload: { action, status },
})
export const setError = (action, error) => ({
    type: SET_ERROR,
    payload: { action, error },
})
