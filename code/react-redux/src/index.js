
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import rootReducer from './store/index';
import { Provider } from 'react-redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
console.log('state', store.getState());

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

render(<Root />, document.getElementById('root'));
registerServiceWorker();