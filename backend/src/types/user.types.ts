export interface UserType {
    email: string;
    password: string;
}

export interface CadasterRequest {
    email: string,
    password: string
}

export interface LoginRequest {
    email: string,
    password: string
}

export interface ErrorsAuth {
    emailErrors: string,
    passwordErrors: string
}