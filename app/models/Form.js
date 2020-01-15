/** modules required for Form model */
const mongoose = require('mongoose');
const time = require('../libs/timeLib');
const Schema = mongoose.Schema;

/**
 * Schema to store Form Details
 * @author Titus Vimal Raj
 */
let FormSchema = new Schema({
    formId: {
        type: String,
        index: true
    },
    propertyType: {
        type: String
    },
    cleaningType: {
        type: String
    },
    propertyAddress: {
        type: String
    },
    propretySize: {
        type: String
    },
    bedrooms: {
        type: String
    },
    bathrooms: {
        type: String
    },
    bathTubs: {
        type: String
    },
    kitchenItems: {
        notrequired: { type: Boolean },
        refrigeratorKitchenItem: { type: Boolean },
        washingMachineKitchenItem: { type: Boolean },
        microwaveKitchenItem: { type: Boolean },
        tumbleDryer: { type: Boolean }
    },
    formCreatedOn: {
        type: Date,
        default: time.now()
    }
})

module.exports = mongoose.model('Form', FormSchema);