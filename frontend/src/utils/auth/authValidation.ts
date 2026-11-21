export interface AuthErrors {
    success: boolean,
    email: string[];
    password: string[];
    password_confirmation: string[];
}

export const validator = (
    email: string, 
    password: string, 
    password_confirmation?: string
): AuthErrors => {
    console.log("asdasda")
    const errors : AuthErrors = 
    {
        success: true,
        email: [],
        password: [],
        password_confirmation: []
    }

    if(!email || !email.includes('@')){
        errors.email.push("Email inválido.")
        errors.success = false
    }

    if(!password || password.length <= 8 || password.length >= 30){
        errors.password.push("A senha deve conter entre 8 e 30 digitos.")
        errors.success = false
    }

    if(!password_confirmation !== undefined && password_confirmation !== password){
        errors.password_confirmation.push("A confirmação da senha deve ser igual a senha digitada.")
        errors.success = false
    }

    return errors
}
