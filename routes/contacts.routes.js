
import express from 'express';
const router = express.Router()
const app = express();
app.set("view engine",'ejs');

import {
    getContacts,
    getContact,
    addContactPage,
    addContact,
    updateContactPage,
    updateContacts,
    deleteContacts

} from "../controller/contact.controller.js"


router.get('/',getContacts);

router.get('/show-contact/:id',getContact);

router.get('/add-contact',addContactPage);

router.post('/add-contact',addContact);

router.get('/update-contact/:id',updateContactPage);

router.post('/update-contact/:id',updateContacts);

router.get('/delete-contact/:id',deleteContacts);


export default router;