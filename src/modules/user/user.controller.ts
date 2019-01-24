import { Application, Request, Response } from 'express';
import * as logger from 'winston';
import { BaseCotroller } from '../BaseApi';
import { user } from './user.model';

export class UserApi extends BaseCotroller {

    constructor() {
        super();
        this.init();
    }

    public register(express: Application) : void {
        express.use('/api/users', this.router);
    }

    public init(): void {
        logger.info('usrs listed called');
        this.router.get('/', this.getUsers);
    }

    public getUsers(req: Request, res: Response): void {
        user.find({}, (err: any, contacts: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(contacts);
            }
        });
    }

}
