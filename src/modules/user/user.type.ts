import { Document } from 'mongoose';
export interface IUser extends Document {
    _id: string;
    password? : string;
    email?: string;
    firstName?: string;
    lastName?: string;
    created_date?: Date;
    token?: string;
}
