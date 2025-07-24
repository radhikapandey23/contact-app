import mongoose from 'mongoose';

export const contactdb = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud')
 .then(()=>console.log("database connected"));
 
}