import { Request, Response, NextFunction } from "express"
import { AppError } from "../middlewares/error.middleware";

interface CadasterRequest {
    email: string,
    password: string
}

interface LoginRequest {
    email: string,
    password: string
}

interface ErrorsAuth {
    emailErrors: string,
    passwordErrors: string
}

export const cadaster = (req: Request<{}, {}, CadasterRequest>, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const errors: ErrorsAuth = {
        emailErrors: '',
        passwordErrors: ''
    };

    // Exemplo de validação
    if (!email || !email.includes('@')) {
        errors.emailErrors = 'E-mail inválido.';
    }

    if (!password || password.length < 8 || password.length > 20) {
        errors.passwordErrors = 'Senha deve ter entre 8 e 20 caractéres.';
    }

    if (errors.emailErrors.length > 0 || errors.passwordErrors.length > 0) {
        throw new AppError('Dados inválidos.', 400, errors);
    }

    //SERVICE DE CRIAÇÃO...

    return res.status(200).json({message: 'Usuário criado com sucesso.', errors: errors})
};   

export const login = (req: Request<{}, {}, LoginRequest>, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const errors: ErrorsAuth = {
        emailErrors: '',
        passwordErrors: ''
    };

    // Exemplo de validação
    if (!email || !email.includes('@')) {
        errors.emailErrors = 'E-mail inválido.';
    }

    if (!password || password.length < 8 || password.length > 20) {
        errors.passwordErrors = 'Senha deve ter entre 8 e 20 caractéres.';
    }

    if (errors.emailErrors.length > 0 || errors.passwordErrors.length > 0) {
        throw new AppError('Dados inválidos.', 400, errors);
    }

    //SERVICE DE GERAR TOKEN...
    const token = null

    return res.status(200).json({message: 'Login efetuado com sucesso.', token: token, errors: errors})
};   