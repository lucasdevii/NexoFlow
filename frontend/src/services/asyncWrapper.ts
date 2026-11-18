import api from './api'; // sua instância do axios/fetch

// Wrapper para GET (não precisa de data)
export const safeGet = async <T = any>(route: string) => {
    try {
        const response = await api.get<T>(route);
        return { error: null, data: response.data };
    } catch (error) {
        console.log("Erro no GET (SERVICE): ", error);
        return { error, data: null };
    }
};

// Wrapper para POST/PUT/PATCH (exige data, opcional ou obrigatório)
export const safePost = async <T = any>(route: string, data?: object) => {
    try {
        const response = await api.post<T>(route, data);
        return { error: null, data: response.data };
    } catch (error) {
        console.log("Erro no POST (SERVICE): ", error);
        console.log("Data enviada: ", data);
        return { error, data: null };
    }
};