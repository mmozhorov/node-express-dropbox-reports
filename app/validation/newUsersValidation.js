const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true,  removeAdditional: "all" });
const requestSchema = require('./newUsers.schema');
ajv.addSchema(requestSchema, "newUsersRequestSchema");

function errorResponse(schemaErrors) {
    let errors = schemaErrors.map( error => {
        return {
            path: error.dataPath,
            message: error.message
        };
    });
    return {
        status: "failed",
        errors: errors
    }
}

function validateSchema(schemaName) {
    return (req, res) => {
        let isValid =  ajv.validate(schemaName, req.body);
        if(!isValid){
            res.status(400).json(errorResponse(ajv.errors));
        }
        else {
            return true;
        }
    }
}

module.exports = validateSchema;