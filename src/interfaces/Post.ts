import { Query, Repository } from './RepositoryTypes'

export interface Post extends Document {
    title: string;
    description?: string;
    content?: string;
    featureImage?: string;
    author?: string;
}

export interface IPostRepository extends Repository<Post> {

}

export interface IPostService {
    createPost(Post: Post): Promise<Post>
    findPost(Query: Query): Promise<Post[]>
    findPostById(id: string): Promise<Post | null>
    updatePost(id: string, Post: Partial<Post>): Promise<Post | null>
    deletePost(id: string): Promise<boolean>
}