import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const middlewares = [];

middlewares.push(thunkMiddleware);

if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger({ collapsed: true })
    middlewares.push(loggerMiddleware);
}



export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middlewares)
    )
}
