import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";
export class ContactRoutes {    
    public contactController: ContactController = new ContactController();
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        // CONTACT
        app.route('/contact') 
        // GET endpoint 
        .get(this.contactController.getContacts)        
        // POST endpoint
        .post(this.contactController.addNewContact)


        // CONTACT DETAIL
        app.route('/contact/:contactId')
        // get specific contact
        .get(this.contactController.getContactByID)
        // update contact
        .put(this.contactController.updateContact)
        // delete contact
        .delete(this.contactController.deleteContact)
    }
}