import { Request, Response } from "express"

import { PostRepository } from "@repositories/postRepositories"
import { PostService } from '@services/postServices'
import { IPostRepository, IPostService, Post } from "interfaces/Post"

const postRepository: IPostRepository = new PostRepository()
const postService: IPostService = new PostService(postRepository)

export const findPost = async (req: Request, res: Response) => {
    console.log('req', req.currentUser)
    try {
        const post = await postService.findPost()
        if (post.length === 0) return res.status(404).json({ message: 'no Post found' })
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}

export const findPostById = async (req: Request, res: Response) => {
    try {
        const post = await postService.findPostById(req.params.id)
        if (!post) return res.status(404).json({ message: 'not Post found' })
        res.json(post)
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}

export const createPost = async (req: Request, res: Response) => {
    try {
        const newPost: Post = req.body
        const result = await postService.createPost(newPost)

        res.status(201).json(result)
    } catch (error) {
        console.log('error:', error)
        res.status(400).json(error)
    }
}

export const updatePost = async (req: Request, res: Response) => {
    try {
        const post = await postService.updatePost(req.params.id, req.body)
        if (!post) return res.status(404).json({ message: 'not Post found' })
        res.json(post)
    } catch (error) {
        console.log('error', error)
        res.status(500).json(error)
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const post = await postService.deletePost(req.params.id)
        if (!post) return res.status(404).json({ message: 'not Post found' })
        res.json(post)
    } catch (error) {
        console.log('error:', error)
        res.status(500).json(error)
    }
}