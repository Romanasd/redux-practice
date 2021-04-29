import {create} from 'apisauce';
import { identity, pickBy } from 'lodash';


const api = create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 30000
});

const getAuthorization = () => {
    const session = localStorage.getItem('auth-token');
    if (session) {
        return {Authorization: `Bearer ${session}`};
    }

    return {}
}

class Http {
    static async get(url, params) {
        const {status, data} = await api.get(url, pickBy(params, identity), {
            headers: {
                ...getAuthorization()
            }
        });

        if (status === 200) {
            return data;
        }

        return {error: true};
    }

    static post(url, body) {
        return api.post(url, body, {
            headers: {
                ...getAuthorization()
            }
        });
    }

    static put(url, body) {
        return api.put(url, body, {
            headers: {
                ...getAuthorization()
            }
        });
    }

    static delete(url, body) {
        return api.delete(url, body, {
            headers: {
                ...getAuthorization()
            }
        });
    }
}

export default Http;
