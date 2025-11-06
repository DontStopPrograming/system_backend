import { Request, Response } from "express"

import { UserRepository } from "@repositories/userRepositories"
import { UserService } from "@services/userService"
import { IUserRepository, IUserService, User } from "interfaces/User"

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService = new UserService(userRepository)

export const findUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.findUser()
        if (user.length === 0) return res.status(404).json({ message: 'no users found' })
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}

export const findUserById = async (req: Request, res: Response) => {
    try {
        const user = await userService.findUserById(req.params.id)
        if (!user) return res.status(404).json({ message: 'not user found' })
        res.json(user)
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser: User = req.body
        const result = await userService.createUser(newUser)

        res.status(201).json(result)
    } catch (error) {
        console.log('error:', error)
        res.status(400).json(error)
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body)
        if (!user) return res.status(404).json({ message: 'not user found' })
        res.json(user)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.deleteUser(req.params.id)
        if (!user) return res.status(404).json({ message: 'not user found' })
        res.json(user)
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}