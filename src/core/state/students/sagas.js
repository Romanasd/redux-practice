import {call, put, all, takeLatest} from 'redux-saga/effects';

import {    
    FETCH_STUDENTS_REQUESTED} from './constants';

import {fetchStudentsSucceeded} from './actions';

import Api from '../../../Api/Student';

function* fetchStudents({...filters}){
    try{
        const {
            documents,
            total,
            size,
        } = yield call(Api.fetchStudents, filters);

        yield put(
            fetchStudentsSucceeded({
            documents,
            total,
            size
        })
        );
    }
    catch(err){
        console.log(err.message)
    }
}


export default function* root(){
    yield all([
        takeLatest(FETCH_STUDENTS_REQUESTED, fetchStudents),
    ]);  
};