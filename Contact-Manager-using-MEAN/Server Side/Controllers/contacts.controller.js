const Contacts = require('../Models/contacts')

exports.listContact = async (req,res)=>{
    try{
        let contacts = await Contacts.find({}).populate('UserID');
        if(!contacts){
            contacts=[]
        }
        res.status(200).json({
            message:"Data Fetched Successfully",
            contactsData:contacts
        })
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error:err
        })
    }
}

exports.addContact = async (req,res)=>{
    const contactObj = {
        UserID : req.body.userid,
        contactname : req.body.cname,
        contactemail : req.body.cemail,
        contactphone : req.body.cphone,
        contacttype : req.body.ctype
    }
    try{
        const contacts = new Contacts(contactObj);
        await contacts.save()
        res.status(201).json({
            message: "Post Created Successfully",
            contactsData:contacts,
            
        })
    }catch(err){
        console.log(err),
        res.status(500).json({
            message:"Something went wrong",
            error:err
        })
    }
}

exports.editContact = async(req,res)=>{
    const id = req.params.id;
    const contactObj = {
        UserID : req.body.userid,
        contactname : req.body.cname,
        contactnumber : req.body.cphone,
        contactemail : req.body.cemail,
        contacttype : req.body.ctype
    }
    try{
        const updatedContact = await Contacts.findOneAndUpdate(id,{$set:contactObj})
        
        if(updatedContact == null){
            res.status(400).json({
                message:"Contact didnt updated successfully/name not found"
            })
        }else{
            res.status(200).json({
                message:"Contact updated successfully",
                contactsData:updatedContact
            })
        }
    }catch(err){
        res.status(200).json({
            message:"Something went wrong",
            error:err
        })
    }
}

exports.deleteContact = async(req,res)=>{
    const id = req.params.id;
    try{
        const deletedContact = await Contacts.findByIdAndDelete(id);
        if(deletedContact==null){
            res.status(400).json({
                message:"Contact didn't deleted Successfully/ Name not found"
            })
        }else{
            res.status(200).json({
                message:"Contact deleted Successfully",
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err
        })
    }
}

exports.getById = async(req,res)=>{
    const id = req.params.id
    try{
        const contact = await Contacts.findById(id);
        if(contact){
            res.status(200).json({
                message:"Contact Fetched",
                contactsData:contact
            })
        }else{
            res.status(400).json({
                message:"Contact not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err
        })
    }
}

exports.getByName = async(req,res)=>{
    const name = req.params.name
    try{
        const contact = await Contacts.findOne({contactName:name});
        if(contact){
            res.status(200).json({
                message:"Contact Fetched",
                contact:contact
            })
        }else{
            res.status(400).json({
                message:"Contact not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err
        })
    }
}

exports.getContactByUser = async (req,res) =>{
    try{
        const contacts = await Contacts.find({UserID:req.params.userid}).populate('UserID');
        if(!contacts){
            contacts = []
        }
        res.status(200).json({
            message:"Data Fetched Successfully",
            contactsData:contacts
        })
    }catch(err){
        res.status(500).json({
            message: "Something went wrong",
            error:err
        })
    }         
}
