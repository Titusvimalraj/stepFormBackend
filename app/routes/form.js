const appConfig = require('../../config/appConfig');
const formController = require('../controllers/formController');
/**
 * This method is used to define routes for this module
 * @author Titus Vimal Raj
 * @param {*} app 
 */
const setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/form`;


    // Form operations


    /**
         * @apiGroup Form
         * @apiVersion  1.0.0
         * @api {get} /api/v1/form/all api for Getting all Forms .
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
                  {
                                                            
                                    "error": false,
                                    "message": "Form fetched sucessfully",
                                    "status": 200,
                                    "data": {
                                            formCreatedOn: 2020-01-15T17:28:56.504Z,
                                            formId: 'n_lW1p9yc',
                                            propertyType: 'Residential',
                                            cleaningType: 'Seasonal Cleaning',
                                            propertyAddress: 'dfsdsfdfs',
                                            bedrooms: '3',
                                            bathrooms: '4',
                                            bathTubs: '4',
                                            kitchenItems: {
                                                notrequired: false,
                                                refrigeratorKitchenItem: false,
                                                washingMachineKitchenItem: true,
                                                microwaveKitchenItem: true,
                                                tumbleDryer: true
                                                    }
                                            }
                        }     
                  @apiErrorExample {json} Error-Response:
                      {
                                            "error": true,
                                            "message": "Route not found in the application || Internal serever error",
                                            "status": "500 || 404",
                                            "data" : "null"
                                      }
    
    */
    app.get(`${baseUrl}/all`, formController.getAllForms);

    /**
         * @apiGroup Forms
         * @apiVersion  1.0.0
         * @api {post} /api/v1/Form/:formId/delete api for deleting Form.
         *
         * @apiParam {string} formId of Form. (query params) (required)
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
                                     {
                                                            
                                    "error": false,
                                    "message": "Form Deleted sucessfully",
                                    "status": 200,
                                    "data": {
                                            formCreatedOn: 2020-01-15T17:28:56.504Z,
                                            formId: 'n_lW1p9yc',
                                            propertyType: 'Residential',
                                            cleaningType: 'Seasonal Cleaning',
                                            propertyAddress: 'dfsdsfdfs',
                                            bedrooms: '3',
                                            bathrooms: '4',
                                            bathTubs: '4',
                                            kitchenItems: {
                                                notrequired: false,
                                                refrigeratorKitchenItem: false,
                                                washingMachineKitchenItem: true,
                                                microwaveKitchenItem: true,
                                                tumbleDryer: true
                                                    }
                            }
                        }     
               
              @apiErrorExample {json} Error-Response:
                            {
                                            "error": true,
                                            "message": "Route not found in the application || Internal serever error",
                                            "status": "500 || 404",
                                            "data" : "null"
                                      }
    */


    app.post(`${baseUrl}/:formId/delete`, formController.deleteForm);

    /**
         * @apiGroup Form
         * @apiVersion  1.0.0
         * @api {post} /api/v1/form/create api for creating a Form.
         *
         * 
         * @apiSuccess {object} myResponse shows error status, message, http status code, result.
         * 
         * @apiSuccessExample {object} Success-Response:
         * 
                                {
                                                            
                                    "error": false,
                                    "message": "Form created sucessfully",
                                    "status": 200,
                                    "data": {
                                            formCreatedOn: 2020-01-15T17:28:56.504Z,
                                            formId: 'n_lW1p9yc',
                                            propertyType: 'Residential',
                                            cleaningType: 'Seasonal Cleaning',
                                            propertyAddress: 'dfsdsfdfs',
                                            bedrooms: '3',
                                            bathrooms: '4',
                                            bathTubs: '4',
                                            kitchenItems: {
                                                notrequired: false,
                                                refrigeratorKitchenItem: false,
                                                washingMachineKitchenItem: true,
                                                microwaveKitchenItem: true,
                                                tumbleDryer: true
                                                    }
                            }
                        }           
             
                @apiErrorExample {json} Error-Response:
                                      {
                                            "error": true,
                                            "message": "Route not found in the application || Internal serever error",
                                            "status": "500 || 404",
                                            "data" : "null"
                                      }
    */

    app.post(`${baseUrl}/create`, formController.createForm);


}

module.exports = {
    setRouter: setRouter
}
