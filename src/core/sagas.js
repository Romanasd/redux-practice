import {all} from 'redux-saga/effects';

import studentSagas from './state/students/sagas';

export default function* root(){
    yield all([
        studentSagas()
    ]);  
};