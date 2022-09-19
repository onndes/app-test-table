import { put, takeEvery, call } from 'redux-saga/effects'

import { usersAPI } from '../service/usersApi'
import { setLoading, setUsers } from '../redux/users/usersAction'
import { FETCH_USERS } from '../redux/users/usersActionType'

const fetchUsers = () => usersAPI.getUsers()

function* fetchUserWorker() {
    yield put(setLoading(true))
    const { data } = yield call(fetchUsers)
    yield put(setUsers(data))
    yield put(setLoading(false))
}

export function* usersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}
