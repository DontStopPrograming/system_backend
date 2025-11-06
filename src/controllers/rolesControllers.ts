import { Request, Response } from "express"

import { RolesRepository } from "@repositories/rolesRepositories"
import { RolesService } from "@services/rolesServices"
import { IRolesRepository, IRolesService, Roles } from "interfaces/Roles"

const rolesRepository: IRolesRepository = new RolesRepository()
const rolesService: IRolesService = new RolesService(rolesRepository)

export const findRoles = async (req: Request, res: Response) => {
    try {
        const roles = await rolesService.findRoles()
        if (roles.length === 0) return res.status(404).json({ message: 'no Roles found' })
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}

export const findRolesById = async (req: Request, res: Response) => {
    try {
        const roles = await rolesService.findRolesById(req.params.id)
        if (!roles) return res.status(404).json({ message: 'not Roles found' })
        res.json(roles)
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}

export const createRoles = async (req: Request, res: Response) => {
    try {
        const newRoles: Roles = req.body
        const result = await rolesService.createRoles(newRoles)

        res.status(201).json(result)
    } catch (error) {
        console.log('error:', error)
        res.status(400).json(error)
    }
}

export const updateRoles = async (req: Request, res: Response) => {
    try {
        const roles = await rolesService.updateRoles(req.params.id, req.body)
        if (!roles) return res.status(404).json({ message: 'not roles found' })
        res.json(roles)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
}

export const deleteRoles = async (req: Request, res: Response) => {
    try {
        const roles = await rolesService.deleteRoles(req.params.id)
        if (!roles) return res.status(404).json({ message: 'not roles found' })
        res.json(roles)
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}
