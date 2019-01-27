import { Document } from 'mongoose';
export interface IUser {
    password? : string;
    email?: string;
    firstName?: string;
    lastName?: string;
    created_date?: Date;
}

export interface IUserModel extends IUser, Document {

}
