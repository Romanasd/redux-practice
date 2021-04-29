/* eslint-disable import/no-anonymous-default-export */
import {
    SET_FOO,FETCH_STUDENTS_SUCCEEDED,
    SET_STUDENT_FORM,
    CLEAR_STUDENT_FORM} from './constants'

const initialState = {
    foo:'',
};

export default (state = initialState, {
    type, ...props
}) => {
    //type aca contiene SET_FOO y ...props solo contiene 'foo', se puede ver esto en el actions.js
    switch(type) {
        case SET_FOO:
        case FETCH_STUDENTS_SUCCEEDED:
            return{
                ...state,
                 ...props
                };
        case SET_STUDENT_FORM:
            return {...state, student: {...state.student, ...props}};
        case CLEAR_STUDENT_FORM:
            return {...state, student: {}};
        // en esta instancia initialState llega con los datos que se le paso 
        // {foo:valor, key:value en caso de qe haya mas}
        default: return state;
    }
}