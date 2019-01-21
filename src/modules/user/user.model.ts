import { Document, Model, model, Schema } from 'mongoose';
import { IUser } from './user.type';

export interface IUserModel extends IUser, Document {

}

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

export const user: Model<IUserModel> = model<IUserModel>('Contact', userSchema);
