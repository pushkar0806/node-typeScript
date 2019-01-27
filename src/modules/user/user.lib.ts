import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { userModel } from './user.model';
import { IUser, IUserModel } from './user.type';
import { logger } from './../../logger';

export class UserLib {

    public async generateHash(password: string): Promise<string> {

        return bcrypt.hashSync(password, 10);
    }

    public async camparePassword(password: string, hash: string): Promise<boolean> {

        return bcrypt.compareSync(password, hash);
    }

    public async getUsers(): Promise<IUser[]> {
        return userModel.find();
    }

    public async saveUser(userData: IUser): Promise<IUser> {
        userData.password = await this.generateHash(userData.password);
        const userObj: IUserModel = new userModel(userData);

        return userObj.save();
    }

    public async getUserByEmail(email: string): Promise<IUser> {
        return userModel.findOne({email: email});
    }

    public async updateUser(userId: string, userData: IUser): Promise<IUser> {
        const user: IUserModel = await userModel.findById(userId);
        user.set(userData);

        return user.save();
    }

    public async deleteUser(id: string): Promise<IUser> {

        return userModel.findOneAndDelete({_id: id});
    }

    public async loginUserAndCreateToken(email: string, password: string): Promise<any> {

        const user: IUser = await this.getUserByEmail(email);
        const isValidPass: boolean = await this.camparePassword(password, user.password);
        if (isValidPass) {
            const token: string = jwt.sign(
                            {id: user._id},
                            'secret',
                            { expiresIn: '24h'},
                        );

            return {user, token};
        } else {
            return false;
        }

    }
}
