import { all } from 'redux-saga/effects'
import {
    addUserWatcher,
    deleteUserWatcher,
    editUserWatcher,
    fetchUsersWatcher,
} from './usersSaga'

export function* rootWatcher() {
    yield all([
        fetchUsersWatcher(),
        addUserWatcher(),
        deleteUserWatcher(),
        editUserWatcher(),
    ])
}
