import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number
  errors: object | undefined

  constructor(message: string, statusCode: number = 500, errors?: object) {
    super(message)

    this.statusCode = statusCode
    this.errors = errors
    this.name = 'AppError'
  }
}

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error instanceof AppError){
      return res.status(error.statusCode).json({message: error.message, errors: error.errors || null})
  }

  return res.status(500).json({
      message: "Erro interno no servidor.", 
      errors: error
  })
}

export default errorHandler;