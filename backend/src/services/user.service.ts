import { orm } from '../prisma/db'
import { UserType } from '../types/user.types'
import { DATABASE_ERROR_CODES } from "../utils/databaseErrorsCode";


export const createUser = async (userData: UserType) => {
    try {
        return await orm.User.create(userData);
    } catch (error) {
        if (error instanceof Error && "sqlState" in error) {
            switch (error.sqlState) {
                case DATABASE_ERROR_CODES.UNIQUE_VIOLATION:
                    throw new Error("O usuário já existe.");
                case DATABASE_ERROR_CODES.FOREIGN_KEY_VIOLATION:
                    throw new Error("Referência inválida.");
                case DATABASE_ERROR_CODES.NOT_NULL_VIOLATION:
                    throw new Error("Campo obrigatório não enviado.");
            }
        }
        throw error;
    }
}