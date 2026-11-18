import api from './api';

function asyncWrapper<T>(method: 'GET', route: string): Promise<{ error: any; data: T | null }>;

function asyncWrapper<T>(method: 'POST' | 'PUT', route: string, data: object): Promise<{ error: any; data: T | null }>;

async function asyncWrapper<T>(method: 'GET' | 'POST' | 'PUT', route: string, data?: object) {
    try {
        let response;

        if (method === 'GET') 
            response = await api.get(route);

        else if (method === 'POST') 
            response = await api.post(route, data);

        else if (method === 'PUT') 
            response = await api.put(route, data);
        
        else if (method == 'DELETE') 
            response = await api.put(route, data);
        

        return { error: null, data: response?.data };
        
    } catch (error) {
        console.log(`Erro de requisição (${method}): `, error);

        return { error, data: null };
    }
}

export default asyncWrapper;