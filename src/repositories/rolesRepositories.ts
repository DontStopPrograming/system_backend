import { modelRoles } from "@models/Roles";
import { Query } from "interfaces/repositoryTypes";
import { IRolesRepository, Roles } from "interfaces/Roles";

export class RolesRepository implements IRolesRepository {
    private Roles: Roles[] = []

    async create(data: Roles): Promise<Roles> {
        const newRoles = new modelRoles(data)
        const savedRoles = await newRoles.save()
        return savedRoles
    }

    async find(query?: Query): Promise<Roles[]> {
        return await modelRoles.find(query || {})
    }

    async findById(id: string): Promise<Roles | null> {
        return await modelRoles.findById(id)
    }

    async update(id: string, data: Partial<Roles>): Promise<Roles | null> {
        return await modelRoles.findByIdAndUpdate(id, data, { new: true })
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await modelRoles.findByIdAndDelete(id)
        return deleted !== null
    }
}