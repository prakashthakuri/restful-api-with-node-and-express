const mongoose = require('mongoose')
const {ContactSchema} = require('../models/crmModel')

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (request, response) => {
    let newContact = new Contact(req.body)

    newContact.save((err, contact) => {

        if(err) {
            response.send(err)
        }
        response.json(contact)
    })
}
//Get Contact

export const getContact = (request, response) => {

    Contact.find( {}, (err, contact) => {

        if(err) {
            response.send(err)
        }
        response.json(contact)
    })
}

export const getContactWithID = (request, response) => {

    Contact.findById(request.params.contactID, (err, contact) => {

        if(err) {
            response.send(err)
        }
        response.json(contact)
    })
}

export const updateContact = (request, response) => {

    Contact.findOneAndUpdate({_id: request.params.contactID}, request.body, {new: true, useFindAndModify: false }, (err, contact) => {
        
         
        if (err) {
            response.send(err)
        }
        response.json(contact)
    })
}

export const deleteContact = (request, response) => {

    Contact.remove({_id: request.params.contactID},  (err, contact) => {
        
         
        if (err) {
            response.send(err)
        }
        // response.json(contact) // there is nothing to pass as we delete the contact
    response.json({message: 'The contact is deleted successfuly'})

    })
}