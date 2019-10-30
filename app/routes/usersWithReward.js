module.exports =  getUsersWithReward = (app) =>{
    app.post('/getUsersWithReward', (request, response) => {
        console.log(request.body);
        response.send("Hello");
    });
};