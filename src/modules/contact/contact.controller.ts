import { Request, Response, Application } from "express";
import * as mongoose from "mongoose";
import { Contact as ContactModel, ContactSchema } from "./contact.model";
import { BaseCotroller } from '../BaseApi';

const Contact = mongoose.model("Contact", ContactSchema);

export class ContactApi extends BaseCotroller{

    constructor() {
        super();
        this.init();
    }

    public register(express: Application) : void{
        express.use('/contacts', this.router);
    }

    public init(): void {
        this.router.get('/', this.getContacts);
        this.router.post('/', this.addNewContact);
        this.router.put('/:contactId', this.updateContact);
    }

    public getContacts(req: Request, res: Response) {
        Contact.find({}, (err, contacts) => {
            if (err) {
                res.send(err);
            } else {
                res.send(contacts);
            }
        });
    }

    public addNewContact(req: Request, res: Response) {

        console.log("calleing save");
        // const newContact = new ContactModel(req.body);
        // newContact.save((err, response) => {
        //     if (err) {
        //         res.send(err);
        //     } else {
        //         console.log("done", response);
        //         res.send(response);
        //     }
        // });
        console.log("saved callled");
    }

    public getContactWithID(req: Request, res: Response) {

        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            } else {
                res.send(contact);
            }
        });
    }

    public updateContact(req: Request, res: Response) {

        Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, { new: true }, (err, contact) => {

            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

}
