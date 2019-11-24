module.exports ={
    "title": "newUsersRequestSchema",
    "description": "Properties required to get new filtered users",
    "type": "object",
    "properties":{
        "username": {
            "type": "string",
            "description": "login of user"
        },
        "password": {
            "type": "string",
            "description": "password of user"
        },
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
    },
    "required": ["username", "password"]
};