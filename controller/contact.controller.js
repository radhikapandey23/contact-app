import Contact from "../models/contacts.models.js";
import mongoose from "mongoose";


 export const getContacts = async (req,res)=>{
      try{
       const {page=1,limit=3}= req.query;
        const option={
          page:parseInt(page),
          limit:parseInt(limit)
        }
        const result = await Contact.paginate({},option)
      //  const contacts = await Contact.find();
     

      res.render('home', {
         totalDocs: result.totalDocs,
         limit: result.limit,
         totalPages: result.totalPages,
         currentPage: result.page,
         counter: result.pagingCounter,
         hasPrevPage: result.hasPrevPage,
         hasNextPage: result.hasNextPage,
         prevPage: result.prevPage,
         nextPage: result.nextPage,
         contacts:result.docs
      })
   }
   catch(error){
    res.render('500', {message: error})
   }
     }

 export const getContact= async (req,res)=>{
    
   if(!mongoose.Types.ObjectId.isValid(req.params.id)){
     return res.render('404', { message : 'Invalid' });
   }
   try{
      const contacts = await Contact.findById({_id : req.params.id})
      if(!contacts) return res.render('404', {message : 'Contact Not Found'})
     res.render('show-contact',{contacts})
   }
   catch(error){
    res.render('500', {message: error})
   }
    
}


 export const addContactPage =(req,res)=>{
 res.render('add-contact')
}


 export const addContact =async(req,res)=>{

     try{
       await Contact.create(req.body);
       res.redirect("/")
     }
   catch(error){
    res.render('500', {message: error})
   }

   
}


 export const updateContactPage =async(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
     return res.render('404', { message : 'Invalid' });
   }

   try{
const contacts = await Contact.findOne({_id:req.params.id})
      if(!contacts) return res.render('404', {message : 'Contact Not Found'})
       res.render('update-contact',{contacts})
   }
   catch(error){
    res.render('500', {message: error})
   }

    

}


 export const updateContacts =async(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
     return res.render('404', { message : 'Invalid' });
   }

   try{
      const contacts =    await Contact.findByIdAndUpdate(req.params.id,req.body)
      if(!contacts) return res.render('404', {message : 'Contact Not Found'})
     res.redirect("/")
   }
   catch(error){
    res.render('500', {message: error})
   }

    
 
}


 export const deleteContacts =async(req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
     return res.render('404', { message : 'Invalid' });
   }

     try{
      const contacts = await Contact.findByIdAndDelete(req.params.id);
      if(!contacts) return res.render('404', {message : 'Contact Not Found'})
     res.redirect("/")
   }
   catch(error){
    res.render('500', {message: error})
   }

}