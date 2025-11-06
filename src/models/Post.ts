import mongoose, { Schema } from 'mongoose'
import { Post } from 'interfaces/Post'

const PostSchema: Schema = new Schema<Post>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        content: {
            type: String
        },
        featureImage: {
            type: String
        },
        author: {
            type: String
        }
    },

    {
        timestamps: true,
        versionKey: false
    }
)

export const modelPost = mongoose.model<Post>('Post', PostSchema)