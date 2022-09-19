import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga'

import users from './users/usersReducer'

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
    users,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
