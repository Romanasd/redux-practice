import {SET_FOO,
    FETCH_STUDENTS_REQUESTED,
    FETCH_STUDENTS_SUCCEEDED,
} from './constants'

export const setFoo = foo => ({type: SET_FOO, foo});

export const fetchStudentRequested = filters => ({type: FETCH_STUDENTS_REQUESTED, ...filters})

export const fetchStudentsSucceeded = props => ({type: FETCH_STUDENTS_SUCCEEDED, ...props})