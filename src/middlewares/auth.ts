import { Request, Response, NextFunction } from 'express'

import { UserRepository } from '@repositories/userRepositories'
import { UserService } from '@services/userService'

import { IUserRepository, IUserService, User } from 'interfaces/User'

import jsonwebtoken from 'jsonwebtoken'

const jwt = jsonwebtoken

const userRepository: IUserRepository = new UserRepository()
const userService: IUserService = new UserService(userRepository)

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const jwtSecret = process.env.JWT_SECRET as string
    const token = req.headers.authorization?.replace(/^Bearer\s+/, '') as string

    try {
        const verify = jwt.verify(token, jwtSecret) as User

        const getUser = await userService.findUserById(verify.id)
        if (!getUser) return res.status(400)
        req.currentUser = getUser
        next()
        console.log('req', verify)

    } catch (error: any) {
        console.log('error', error)
        res.status(400).send(error.message)
    }

}


export const getPermission = async (req: Request, res: Response, next: NextFunction) => {
    const { currentUser, method, path } = req
    const currentModule = path.replace(/^\/([^\/]+).*/, '$1')


    const findMethod = permission.find(x => x.method === Method[method as keyof typeof Method])

    if (!findMethod?.permission.includes(`${currentModule}_${findMethod.scope}`)) {
        findMethod?.permission.push(`${currentModule}_${findMethod.scope}`)
    }

    console.log('findMethod:', findMethod)

    // const rolesPermission = roles?.map(role => role.permission)
    // const flatPermission = rolesPermission?.flat()
    // const mergedPermission = [new Set(flatPermission)]
    const mergedRolesPermission = [...new Set(roles?.flatMap(x => x.permission))]
    console.log('mergedPermission', mergedRolesPermission)

    let userPermission: string[] = []

    if (currentUser.permission?.length !== 0) {
        userPermission = currentUser.permission!
    } else {
        userPermission = mergedRolesPermission
    }

    const permissionGranted = findMethod?.permission.find(x => mergedRolesPermission.includes(x))
    console.log('permissionGranted:', permissionGranted)
    if (!permissionGranted) return res.status(401).send('Unauthorized')


    console.log('permissionGranted:', permissionGranted)
}

