const mongoose = require('mongoose');
const shortId = require('shortid');
const checkLib = require('../libs/checkLib');
const timeLib = require('../libs/timeLib');
const logger = require('../libs/loggerLib');
const responseLib = require('../libs/responseLib');

const FormModel = mongoose.model('Form');

/**
 * @description this will get all the forms to client
 * @author Titus Vimal Raj
 * @param {*} req 
 * @param {*} res 
 * @returns {Response} response
 */
let getAllForms = (req, res) => {

    fetchAllForms = () => {


        return new Promise((resolve, reject) => {
            FormModel.find().select('-_id -__v')
                .exec((err, formData) => {
                    if (err) {
                        logger.error('error in fetching all the Forms', 'formController:getAllForms:fetchAllForms()', 1);
                        let apiResponse = responseLib.generateResponse(true, 'could not load the Forms(internal server error)', 500, null);
                        reject(apiResponse);
                    }
                    else if (checkLib.isEmpty(formData)) {
                        logger.error('no Forms found', 'formController:getAllForms:fetchAllForms()', 1);
                        let apiResponse = responseLib.generateResponse(true, 'No Forms Available', 201, null);
                        reject(apiResponse);
                    }
                    else {
                        console.log(formData);
                        resolve(formData);
                    }
                })
        })
    }// end of fetch all Forms

    getAllForms(req, res)
        .then((response) => {
            let apiResponse = responseLib.generateResponse(false, 'Forms fetched successfully', 200, response);
            res.status(apiResponse.status).send(apiResponse);
        }).catch((err) => {
            res.status(err.status).send(err);
        })

}//end get All Forms



/**
 * @description Will delete form from DB
 * @author Titus Vimal Raj
 * @param {*} req 
 * @param {*} res
 * @returns {Response} response
 */
let deleteForm = (req, res) => {
    deleteFormDB = () => {


        return new Promise((resolve, reject) => {
            console.log(req.params.formId);
            FormModel.findOneAndRemove({ formId: req.params.formId }, (err, result) => {
                if (err) {
                    logger.error('failed to find a form', 'formController:deleteForm:deleteFormDB()', 1);
                    let apiResponse = responseLib.generateResponse(true, 'failed to find the Form', 500, null);
                    reject(apiResponse);
                }
                else if (checkLib.isEmpty(result)) {
                    logger.error('form not found', 'formController:deleteForm:deleteFormDB()', 1);
                    let apiResponse = responseLib.generateResponse(true, 'Form not found', 202, null);
                    reject(apiResponse);
                }
                else {
                    resolve(result);
                }
            })
        })
    }//end of delete form DB

    deleteForm(req, res)
        .then((response) => {
            let apiResponse = responseLib.generateResponse(false, `deleted Form sucessfully`, 200, response);
            res.status(apiResponse.status).send(apiResponse);
        }).catch((err) => {
            res.status(err.status).send(err);
        })

}//end delete Form 



/**
 * @description Will create a Form in DB
 * @author Titus Vimal Raj
 * @param {*} req 
 * @param {*} res
 * @returns {Response} response
 */

let createForm = (req, res) => {
    console.log("inside create form");
    // function to create Form.

    console.log("inside the form method");

    var today = Date.now()
    let formId = shortId.generate()

    let newForm = new FormModel({
        formId: formId,
        propertyType: req.body.propertyType,
        cleaningType: req.body.cleaningType,
        propertyAddress: req.body.propertyAddress,
        propretySize: req.body.propretySize,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        bathTubs: req.body.bathTubs,
        kitchenItems: {
            notrequired: req.body.kitchenItems.notrequired,
            refrigeratorKitchenItem: req.body.kitchenItems.refrigeratorKitchenItem,
            washingMachineKitchenItem: req.body.kitchenItems.washingMachineKitchenItem,
            microwaveKitchenItem: req.body.kitchenItems.microwaveKitchenItem,
            tumbleDryer: req.body.kitchenItems.tumbleDryer
        },
        formCreatedOn: today
    })

    newForm.save((err, result) => {
        if (err) {
            console.log(`error occurred createForms(): ${err}`);

        }
        else if (result == undefined || result == null || result == "") {
            console.log("Form Is Not Saved. createForms()");

        }
        else {
            console.log("Form Saved.");
            console.log(result);
        }
    });




} // end of the createForm function


module.exports = {

    getAllForms: getAllForms,
    deleteForm: deleteForm,
    createForm: createForm
}