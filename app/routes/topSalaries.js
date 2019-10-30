module.exports =  getTopOfSalaries = (app) =>{
    app.post('/getTopOfSalaries', (request, response) => {
        response.send("Hello");
    });
};