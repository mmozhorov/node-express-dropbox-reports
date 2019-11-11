const findProperty = (obj) => {
    let status = "";
    Object.keys(obj).forEach(key => {
        if (key === "status"){
            status = obj[key];
        }

    });
    return Number(status);
};

module.exports = function (response, message, status = 400) {
    const responseResponse = findProperty(message);
    response.status(responseResponse).json({
        status: "failed",
        errors: message
    });
};