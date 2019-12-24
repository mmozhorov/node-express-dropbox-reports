const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true,  removeAdditional: "all" });
ajv.addSchema(require('./schema'), "reportsRequestSchema");

module.exports = (request, response, next) => {
        try{
            let isValid =  ajv.validate("reportsRequestSchema", request.query);
            if(!isValid){
                throw {
                    status: 400,
                    responseText: ajv.errors
                };

            }
            else {
                next();
            }
        }
        catch(error){
            next(error);
        }
};