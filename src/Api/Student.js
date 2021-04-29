import Http from './';

class Students {
    static fetchStudents(filters = {}) {
        return Http.get('/public-api/student', filters);
    }

    static fetchStudent(id) {
        return Http.get(`/public-api/student/${id}`);
    }

    static submitStudent({_id, ...props}) {
        if (_id) {
            return Http.put(`/public-api/student/${_id}`, props);
        }
        return Http.post(`/public-api/student`, props);
    }
    
}

export default Students;
