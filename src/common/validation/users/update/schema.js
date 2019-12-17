module.exports ={
    "title": "gettingUserRequestSchema",
    "description": "Properties required to get user",
    "type": "object",
    "properties":{
        "id": {
            "type": "string",
            "description": "id of user",
            "minLength": 1
        },
        "name":{
            "type": "string",
            "description": "name of user",
            "minLength": 1,
            "maxLength": 255
        },
        "lastName":{
            "type": "string",
            "description": "lastName of user",
            "minLength": 1,
            "maxLength": 255
        },
        "profession":{
            "type": "string",
            "description": "profession of user",
            "minLength": 1,
            "maxLength": 255
        },
        "photo":{
            "type": "string",
            "description": "lastName of user",
            "minLength": 1,
            "maxLength": 255
        },
        "join_date":{
            "type": "string",
            "description": "lastName of user",
            "minLength": 1,
            "maxLength": 255
        },
    },
    "required": ["id"]
};