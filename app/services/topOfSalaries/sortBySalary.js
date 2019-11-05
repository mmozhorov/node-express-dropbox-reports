module.exports = ( firstUser, secondUser) => {
    const firstUserSalary = Number(firstUser[2]);
    const secondUserSalary = Number(secondUser[2]);
    return secondUserSalary - firstUserSalary;
};