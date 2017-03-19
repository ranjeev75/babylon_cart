import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {persistStore, autoRehydrate} from 'redux-persist'
import Reducer from '../reducers'


function configureStore(initialStat) {
    return createStore(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        compose(
          applyMiddleware(thunk),
          autoRehydrate()
        ),
    )
}

const store = configureStore();
persistStore(store);
export default store
