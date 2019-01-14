import * as bodyParser from "body-parser";
import * as exress from "express";
import * as mongoose from "mongoose";
import { registerRoutes } from "./routes";

class App {

    public app: exress.Application;
    public mongoUrl: string = "mongodb://localhost/CRMdb";

    constructor() {
        this.app = exress();
     
        this.middleware();
        this.setupRoutes();
        this.mongoSetup();
    }

    private middleware(): void {

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private setupRoutes(): void {
        registerRoutes(this.app);
    }
    private mongoSetup(): void {
        (mongoose as any).Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }

   
}

export default new App().app;
