import api from './api';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

async function asyncWrapper<T>(
    method: HttpMethod,
    route: string,
    data?: object
): Promise<{ error: unknown; data: T | null }> {
    try {
        let response;

        switch (method) {
            case 'GET':
                response = await api.get<T>(route);
                break;

            case 'POST':
                response = await api.post<T>(route, data);
                break;

            case 'PUT':
                response = await api.put<T>(route, data);
                break;

            case 'DELETE':
                response = await api.delete<T>(route);
                break;
        }

        return {
            error: null,
            data: response.data
        };

    } catch (error) {
        console.error(`Erro de requisição (${method}):`, error);

        return {
            error,
            data: null
        };
    }
}

export default asyncWrapper;