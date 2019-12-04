class RequestNewUsers{
    constructor(){
        this.username = "";
        this.password = "";
        this.limit = 10;
        this.offset = 0;
    }
}

class ResponseNewUsers{
    constructor(){
        this.users = [];
    }
}

module.exports = {
    RequestNewUsers,
    ResponseNewUsers
};