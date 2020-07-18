const {addNewContact,
        getContact, 
        getContactWithID,
        updateContact,
        deleteContact
                } = require('../controllers/crmController')

const routes = (app) => {
    app.route('/contact')
        .get((req,res, next) =>{

            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContact)
    //  (req,res, next)=> {
                
    //         res.send('GET request successfull')

    // })
    .post(addNewContact)
           
        // .post((req,res) =>
        // res.send('POST request succesful'))

    app.route('/contact/:contactID')

    //get specific contact
        .get(getContactWithID)
        // .put((req,res) =>
        // res.send('PUT request succesful'))
    //updating specific contact
        .put(updateContact)

        // .delete((req,res) =>
        // res.send('DELETE request succesful'))
    //delete specific contact
        .delete(deleteContact)
}

export default routes
