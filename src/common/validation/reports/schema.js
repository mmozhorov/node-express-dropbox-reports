module.exports ={
    "title": "reportsRequestSchema",
    "description": "Properties required to get filtered reports",
    "type": "object",
    "properties":{
        "limit": {
            "type": "string",
            "description": "limit of result on page",
            "minLength": 1,
            "maxLength": 5
        },
        "offset": {
            "type": "string",
            "description": "number of page",
            "minLength": 1
        }
    }
};