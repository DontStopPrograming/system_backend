import { modelUser } from "@models/User";
import { Query } from "interfaces/repositoryTypes";
import { IUserRepository, User } from "interfaces/User";

export class UserRepository implements IUserRepository {
    private users: User[] = []

    async create(data: User): Promise<User> {
        const newUser = new modelUser(data)
        const savedUser = await newUser.save()
        return savedUser
    }

    async find(query?: Query): Promise<User[]> {
        return await modelUser.find(query || {})
    }

    async findOne(query: Query): Promise<User | null> {
        return await modelUser.findOne(query)
    }

    async findById(id: string): Promise<User | null> {
        return await modelUser.findById(id)
    }

    async update(id: string, data: Partial<User>): Promise<User | null> {
        return await modelUser.findByIdAndUpdate(id, data, { new: true })
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await modelUser.findByIdAndDelete(id)
        return deleted !== null
    }
}