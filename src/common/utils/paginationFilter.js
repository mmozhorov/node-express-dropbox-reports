module.exports = (arr = [], request ) => {
    const limit = request.limit ? Number(request.limit) : 10;
    const offset = request.offset ? Number(request.offset) : 0;
    const skipNumber = (limit * offset);
    const lastNumber = skipNumber + limit;
    return arr.slice(skipNumber, lastNumber);
};