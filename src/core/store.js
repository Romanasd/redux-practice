import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import middleware from './middlewares';
import rootSaga from './sagas';
import reducers from './reducers';

import {reactotronEnhancer} from './middlewares/devTools';

const composeEnhancers = compose;

const configureStore = preloadedState => {
    const store = createStore(
        reducers,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                ...middleware
            ),
            reactotronEnhancer
        )
    );

    return store;
};

const store = configureStore();
const [sagaMiddleware] = middleware;
let sagaTask = sagaMiddleware.run(rootSaga);

module.hot.accept('./reducers', () => { window.location.reload(); });
module.hot.accept('./sagas', () => {
    sagaTask.cancel();
    sagaTask = sagaMiddleware.run(rootSaga);
});

export default store;
