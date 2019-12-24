module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    if (err.status && err.responseText){
        return res.status(err.status).json(err);
    }
    return res.status(500).json({
        status: 500,
        responseText: "Something went wrong"
    });
}