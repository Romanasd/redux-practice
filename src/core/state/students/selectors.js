import get from 'lodash/get';

export const getStudents = filters => state => {
    const documents = get(state, 'state-documents', [] );
    if(filters){
        return documents;
    }
    return documents;
}