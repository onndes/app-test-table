import { put, takeEvery, call } from 'redux-saga/effects'

import { usersAPI } from '../service/usersApi'
import {
    addUsers,
    deleteUser,
    editUser,
    setUsers,
    setStatus,
    setError,
    deletedUserIdsAction,
} from '../redux/users/usersAction'
import {
    ASYNC_ADD_USERS,
    ASYNC_DELETE_USERS,
    ASYNC_EDIT_USERS,
    FETCH_USERS,
} from '../redux/users/usersActionType'
import { enumStatus, enumStatusAction } from '../common/enumStatus'

const fetchUsers = () => usersAPI.getUsers()
const addUser = (userData) => usersAPI.addUser(userData)
const editUserRequest = (userData) => usersAPI.editUser(userData)
const deleteUserRequest = (userId) => usersAPI.deleteUser(userId)

function* fetchUserWorker() {
    try {
        yield put(setStatus(enumStatusAction.FETCH, enumStatus.LOADING))
        yield put(setError(enumStatusAction.FETCH, null))
        yield put(setUsers([]))
        const { status, data } = yield call(fetchUsers)
        if (status === 200) {
            yield put(setUsers(data))
            yield put(setStatus(enumStatusAction.FETCH, enumStatus.SUCCESS))

            const usersJSON = JSON.stringify(data)
            window.sessionStorage.setItem('users', usersJSON)
        }
    } catch (e) {
        yield put(setStatus(enumStatusAction.FETCH, enumStatus.ERROR))
        yield put(setError(enumStatusAction.FETCH, e))
    }
}

function* addUserWorker(action) {
    try {
        yield put(setStatus(enumStatusAction.ADD, enumStatus.LOADING))
        yield put(setError(enumStatusAction.ADD, null))
        const res = yield call(addUser, action.payload)
        if (res.status === 201) {
            yield put(addUsers(res.data))
            yield put(setStatus(enumStatusAction.ADD, enumStatus.SUCCESS))
        }
    } catch (e) {
        yield put(setStatus(enumStatusAction.ADD, enumStatus.ERROR))
        yield put(setError(enumStatusAction.ADD, e))
    }
}

function* editUserWorker(action) {
    try {
        yield put(setStatus(enumStatusAction.EDIT, enumStatus.LOADING))
        yield put(setError(enumStatusAction.EDIT, null))
        const res = yield call(editUserRequest, action.payload)
        if (res.status === 200) {
            yield put(editUser(res.data))
            yield put(setStatus(enumStatusAction.EDIT, enumStatus.SUCCESS))
        }
    } catch (e) {
        yield put(setStatus(enumStatusAction.EDIT, enumStatus.ERROR))
        yield put(setError(enumStatusAction.EDIT, e))
    }
}

function* deleteUserWorker(action) {
    try {
        yield put(setStatus(enumStatusAction.DELETE, enumStatus.LOADING))
        yield put(setError(enumStatusAction.DELETE, null))
        yield put(deletedUserIdsAction(action.payload))
        const res = yield call(deleteUserRequest, action.payload)
        if (res.status === 200) {
            yield put(deleteUser(res.data.id))
            yield put(setStatus(enumStatusAction.DELETE, enumStatus.SUCCESS))
        }
    } catch (e) {
        yield put(setStatus(enumStatusAction.DELETE, enumStatus.ERROR))
        yield put(setError(enumStatusAction.DELETE, e))
    } finally {
        yield put(deletedUserIdsAction(action.payload))
    }
}

export function* fetchUsersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}

export function* addUserWatcher() {
    yield takeEvery(ASYNC_ADD_USERS, addUserWorker)
}

export function* editUserWatcher() {
    yield takeEvery(ASYNC_EDIT_USERS, editUserWorker)
}

export function* deleteUserWatcher() {
    yield takeEvery(ASYNC_DELETE_USERS, deleteUserWorker)
}
