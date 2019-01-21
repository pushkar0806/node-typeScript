import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';
import { registerRoutes } from './routes';

export class App {

    public express: express.Application;
    public mongoUrl: string = 'mongodb://localhost/CRMdb';
    public httpServer: http.Server;

    public async init(): Promise <void> {
        this.express = express();
        this.httpServer = http.createServer(this.express);

        this.middleware();
        this.setupRoutes();
        this.mongoSetup();
    }

    private middleware(): void {

        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private setupRoutes(): void {
        registerRoutes(this.express);
    }
    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl);
    }
}
