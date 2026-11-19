import api from '@/services/api'
import http from '@/services/asyncWrapper'
import type userModel from '@/types/userType'

export const userCreate = async (user: userModel) => {
    return await http('POST', '/cadaster', user)
}

export const userLogin = async (user: userModel) => {
    return await http('POST', '/login', user)
}
