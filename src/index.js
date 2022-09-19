import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { GlobalStyle } from './common/GlobalStyles'
import { store } from './redux/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>
)
