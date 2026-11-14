import API from '@/services/api'
import asyncWrapper from '@/services/asyncWrapper'
import type userModel from '@/types/userType'

export const userCreate = async (user: userModel) => {
    return await asyncWrapper(API.post, "/users", user)
}

export const userLogin = async (user: userModel) => {
    return await asyncWrapper(API.post, '/login', user)
}
