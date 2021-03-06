define({ "api": [
  {
    "group": "Form",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/form/all",
    "title": "api for Getting all Forms .",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n                                          \n                  \"error\": false,\n                  \"message\": \"Form fetched sucessfully\",\n                  \"status\": 200,\n                  \"data\": {\n                          formCreatedOn: 2020-01-15T17:28:56.504Z,\n                          formId: 'n_lW1p9yc',\n                          propertyType: 'Residential',\n                          cleaningType: 'Seasonal Cleaning',\n                          propertyAddress: 'dfsdsfdfs',\n                          bedrooms: '3',\n                          bathrooms: '4',\n                          bathTubs: '4',\n                          kitchenItems: {\n                              notrequired: false,\n                              refrigeratorKitchenItem: false,\n                              washingMachineKitchenItem: true,\n                              microwaveKitchenItem: true,\n                              tumbleDryer: true\n                                  }\n                          }\n      }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n                      \"error\": true,\n                      \"message\": \"Route not found in the application || Internal serever error\",\n                      \"status\": \"500 || 404\",\n                      \"data\" : \"null\"\n                }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/form.js",
    "groupTitle": "Form",
    "name": "GetApiV1FormAll"
  },
  {
    "group": "Form",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/form/create",
    "title": "api for creating a Form.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n        {\n                                    \n            \"error\": false,\n            \"message\": \"Form created sucessfully\",\n            \"status\": 200,\n            \"data\": {\n                    formCreatedOn: 2020-01-15T17:28:56.504Z,\n                    formId: 'n_lW1p9yc',\n                    propertyType: 'Residential',\n                    cleaningType: 'Seasonal Cleaning',\n                    propertyAddress: 'dfsdsfdfs',\n                    bedrooms: '3',\n                    bathrooms: '4',\n                    bathTubs: '4',\n                    kitchenItems: {\n                        notrequired: false,\n                        refrigeratorKitchenItem: false,\n                        washingMachineKitchenItem: true,\n                        microwaveKitchenItem: true,\n                        tumbleDryer: true\n                            }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": true,\n      \"message\": \"Route not found in the application || Internal serever error\",\n      \"status\": \"500 || 404\",\n      \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/form.js",
    "groupTitle": "Form",
    "name": "PostApiV1FormCreate"
  },
  {
    "group": "Forms",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/Form/:formId/delete",
    "title": "api for deleting Form.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "formId",
            "description": "<p>of Form. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "             {\n                                    \n            \"error\": false,\n            \"message\": \"Form Deleted sucessfully\",\n            \"status\": 200,\n            \"data\": {\n                    formCreatedOn: 2020-01-15T17:28:56.504Z,\n                    formId: 'n_lW1p9yc',\n                    propertyType: 'Residential',\n                    cleaningType: 'Seasonal Cleaning',\n                    propertyAddress: 'dfsdsfdfs',\n                    bedrooms: '3',\n                    bathrooms: '4',\n                    bathTubs: '4',\n                    kitchenItems: {\n                        notrequired: false,\n                        refrigeratorKitchenItem: false,\n                        washingMachineKitchenItem: true,\n                        microwaveKitchenItem: true,\n                        tumbleDryer: true\n                            }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n                \"error\": true,\n                \"message\": \"Route not found in the application || Internal serever error\",\n                \"status\": \"500 || 404\",\n                \"data\" : \"null\"\n          }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/form.js",
    "groupTitle": "Forms",
    "name": "PostApiV1FormFormidDelete"
  }
] });
