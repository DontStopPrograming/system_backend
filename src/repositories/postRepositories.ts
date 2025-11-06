import { modelPost } from "@models/Post";
import { Query } from "interfaces/repositoryTypes";
import { IPostRepository, Post } from "interfaces/Post";

export class PostRepository implements IPostRepository {
    private Post: Post[] = []

    async create(data: Post): Promise<Post> {
        const newPost = new modelPost(data)
        const savedPost = await newPost.save()
        return savedPost
    }

    async find(query?: Query): Promise<Post[]> {
        return await modelPost.find(query || {})
    }

    async findById(id: string): Promise<Post | null> {
        return await modelPost.findById(id)
    }

    async update(id: string, data: Partial<Post>): Promise<Post | null> {
        return await modelPost.findByIdAndUpdate(id, data, { new: true })
    }

    async delete(id: string): Promise<boolean> {
        const deleted = await modelPost.findByIdAndDelete(id)
        return deleted !== null
    }
}