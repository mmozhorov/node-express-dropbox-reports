module.exports ={
    "title": "gettingUserRequestSchema",
    "description": "Properties required to get user",
    "type": "object",
    "properties":{
        "id": {
            "type": "string",
            "description": "id of user",
            "minLength": 1
        }
    },
    "required": ["id"]
};