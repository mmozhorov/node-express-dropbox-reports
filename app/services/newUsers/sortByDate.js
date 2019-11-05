module.exports = ( firstUser, secondUser) => {
    const firstUserDate = new Date(firstUser[5]);
    const secondUserDate = new Date(secondUser[5]);
    return secondUserDate.getTime() - firstUserDate.getTime();
};