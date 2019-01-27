import { Model, model, Schema } from 'mongoose';
import { IUser } from './user.type';

export const userSchema: Schema = new Schema({
    password: {
        type: String,
    },
    created_date: {
        default: Date.now,
        type: Date,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        required: 'Enter a first name',
        type: String,
    },
    lastName: {
        required: 'Enter a last name',
        type: String,
    },
});

export const userModel: Model<IUser> = model<IUser>('Contact', userSchema);
