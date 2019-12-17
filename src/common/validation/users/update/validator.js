const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true,  removeAdditional: "all" });
ajv.addSchema(require('./schema'), "updatingUserRequestSchema");

module.exports = (request, response, next) => {
    try{
        let isValid =  ajv.validate("updatingUserRequestSchema", { ...request.params, ...request.body});
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