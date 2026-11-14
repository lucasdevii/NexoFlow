const asyncWrapper = async (fn : (route: string, data: object) => Promise<any>, route: string, data: object) => {
    try{
        const response = await fn(route, data)

        return {error: null, data: response}
    } catch (error) {
        console.log("Erro de requisição (SERVICE): ", error)

        return {error, data: null}
    }
}

export default asyncWrapper