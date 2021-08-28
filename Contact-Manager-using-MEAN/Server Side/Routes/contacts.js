const express = require('express');
const router = express.Router();
const auth = require('../Middleware/auth')
const contactsController = require('../Controllers/contacts.controller');
const multer = require('multer');
const upload = multer({dest:"uploads/"})


router.get('/',contactsController.listContact)

router.get('/getbyid/:id',contactsController.getById)

router.get('/getbyname/:name',contactsController.getByName)


router.post('/save',auth,contactsController.addContact)

router.put('/update/:id',auth,contactsController.editContact)

router.delete('/delete/:id',auth,contactsController.deleteContact)

router.get('/:userid',auth,contactsController.getContactByUser)

router.post('/upload',upload.single('imagefile'),(req,res)=>{
    res.status(200).json({
        details:req.file
    })
})

module.exports = router;