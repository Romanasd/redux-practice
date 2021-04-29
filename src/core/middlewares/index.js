import createSagaMiddleware from 'redux-saga'

import {sagaMonitor} from './devTools'

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = [
    sagaMiddleware,
    ...(() => {
        return [];
    })()
];
export default middleware;