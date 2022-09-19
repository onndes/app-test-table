import {combineReducers, createStore } from 'redux'

import users from './users/usersReducer'


export const rootReducer = combineReducers({
    users,
})

export const store = createStore(rootReducer)

