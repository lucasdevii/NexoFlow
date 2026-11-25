import { Request, Response, NextFunction } from "express"
import { AppError } from "../middlewares/error.middleware";
import { createUser } from "../services/user.service";
import { CadasterRequest, ErrorsAuth, LoginRequest, UserType } from "../types/user.types";



export const cadaster = async (req: Request<{}, {}, CadasterRequest>, res: Response) => {
    const data: CadasterRequest = req.body;

    const errors: ErrorsAuth = {
        emailErrors: '',
        passwordErrors: ''
    };

    // Exemplo de validação
    if (!data.email || !data.email.includes('@')) {
        errors.emailErrors = 'E-mail inválido.';
    }

    if (!data.password || data.password.length < 8 || data.password.length > 20) {
        errors.passwordErrors = 'Senha deve ter entre 8 e 20 caractéres.';
    }

    if (errors.emailErrors.length > 0 || errors.passwordErrors.length > 0) {
        throw new AppError('Dados inválidos.', 400, errors);
    }

    const userData: UserType = { email: data.email, password: data.password };

    await createUser(userData);

    return res.status(201).json({message: 'Usuário criado com sucesso.', errors: null})
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