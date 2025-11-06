import mongoose, { Schema } from 'mongoose'
import { Roles } from '../interfaces/Roles'

const RolesSchema: Schema = new Schema<Roles>(

    {
        name: {
            type: String,
            required: true,
            unique: true
        },

        permissions: {
            type: [String],
            default: []
        }
    },

    {
        timestamps: true,
        versionKey: false
    }
)

export const modelRoles = mongoose.model<Roles>('Roles', RolesSchema)
