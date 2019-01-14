import * as express from "express";

import { ContactApi } from "./modules/contact/contact.controller";

export function registerRoutes(app: express.Application): void{
   
    new ContactApi().register(app);

}