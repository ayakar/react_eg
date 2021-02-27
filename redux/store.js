import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/index'


// CREATING INITIAL STORE
export default initialState => {

    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )


    // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
    if (module.hot) {
        module.hot.accept('./reducers/index', () => {
            const createNextReducer = require('./reducers/index').default
            store.replaceReducer(createNextReducer(initialState))
        })
    }


    return store
}