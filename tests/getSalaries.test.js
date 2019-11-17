const chai = require('chai');
const isEqual = require('lodash').isEqual;
const expect = chai.expect;
const getSalaries = require('../app/services/topOfSalaries/getSalaries');
const users = require('./testUsers').users;

describe('Filtered salaries', () => {
    it('Checks one new filtered user in normal situation', async function () {
        this.timeout(10000);
        const expectedResult = [
            {
                "name": "Sten",
                "lastName": "Smith",
                "salary, RUB": "482738.48Р",
                "salary, USD": "$7556"
            },
            {
                "name": "Alex",
                "lastName": "Red",
                "salary, RUB": "383328.60Р",
                "salary, USD": "$6000"
            },
            {
                "name": "Nick",
                "lastName": "Levskoy",
                "salary, RUB": "360328.88Р",
                "salary, USD": "$5640"
            },
            {
                "name": "Ksenia",
                "lastName": "Zagorodniy",
                "salary, RUB": "359945.56Р",
                "salary, USD": "$5634"
            },
            {
                "name": "Maksim",
                "lastName": "Mozhorov",
                "salary, RUB": "357773.36Р",
                "salary, USD": "$5600"
            },
            {
                "name": "Matt",
                "lastName": "Cauton",
                "salary, RUB": "355473.39Р",
                "salary, USD": "$5564"
            },
            {
                "name": "Irina",
                "lastName": "Blue",
                "salary, RUB": "291585.29Р",
                "salary, USD": "$4564"
            },
            {
                "name": "Kristina",
                "lastName": "Boldirev",
                "salary, RUB": "278296.56Р",
                "salary, USD": "$4356"
            },
            {
                "name": "Lev",
                "lastName": "Black",
                "salary, RUB": "232872.12Р",
                "salary, USD": "$3645"
            },
            {
                "name": "Yaroslav",
                "lastName": "Black",
                "salary, RUB": "227441.64Р",
                "salary, USD": "$3560"
            }
        ];
        const salaries = await getSalaries(users);
        const isEqualExpectAndReal = isEqual(salaries,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass Object', async function () {
        const users = {};
        const expectedResult = [];
        const salaries = await getSalaries(users);
        const isEqualExpectAndReal = isEqual(salaries,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass without users', async function () {
        const users = [];
        const filteredUsers = await getSalaries(users);
        const expectedResult = [];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass with 1 user', async function () {
        const users = [
            [ "Name", "Surname", "Salary, USD", "Position", "Photo", "join_date" ],
            [ "Kristina", "Boldirev", "4356", "Team Lead", "", "12/10/2012" ],
        ];
        const filteredUsers = await getSalaries(users);
        const expectedResult = [
            {
                "name": "Kristina",
                "lastName": "Boldirev",
                "salary, RUB": "278296.56Р",
                "salary, USD": "$4356"
            }
        ];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass without params', async function () {
        const users = [];
        const expectedResult = [];
        const salaries = await getSalaries(users);
        const isEqualExpectAndReal = isEqual(salaries,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });
});

