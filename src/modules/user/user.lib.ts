import { userModel } from './user.model';
import { IUser, IUserModel } from './user.type';

export class UserLib {

    public async getUsers(): Promise<IUser[]> {
        return userModel.find();
    }

    public async saveUser(userData: IUser): Promise<IUser> {
        const userObj: IUserModel = new userModel(userData);

        return userObj.save();
    }

    public async updateUser(userId: string, userData: IUser): Promise<IUser> {
        const user: IUserModel = await userModel.findById(userId);
        user.set(userData);

        return user.save();
    }

    public async deleteUser(id: string): Promise<IUser> {

        return userModel.findOneAndDelete({_id: id});
    }
}
