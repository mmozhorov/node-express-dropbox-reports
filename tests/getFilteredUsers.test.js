const mocha = require('mocha');
const chai = require('chai');
const isEqual = require('lodash').isEqual;
const expect = chai.expect;
const getFilteredUsers = require('../app/services/newUsers/getFilteredUsers');
const users = require('./testUsers').users;

describe('New filtered users', () => {
    it('Checks one new filtered user in normal situation', () => {
        const filteredUsers = getFilteredUsers(users, 1, 9 );
        const expectedResult = [
                {
                    "name": "Jack",
                    "lastName": "Simon",
                    "join_date": "4/21/2014"
                }
            ];
        const isEqualExpectAndReal = isEqual(filteredUsers, expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Checks new 12 filtered users from page 2', () => {
        const filteredUsers = getFilteredUsers(users, 2, 1 );
        const expectedResult = [
            {
                "name": "Alex",
                "lastName": "Red",
                "join_date": "11/18/2018"
            },
            {
                "name": "Sam",
                "lastName": "Green",
                "join_date": "12/23/2017"
            }
        ];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Checks new 50 filtered users from page 4', () => {
        const filteredUsers = getFilteredUsers(users, 50, 3 );
        const expectedResult = [];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass Object in limit', () => {
        const filteredUsers = getFilteredUsers(users, {}, 3 );
        const expectedResult = [];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass Array in offset', () => {
        const filteredUsers = getFilteredUsers(users, 0, [] );
        const expectedResult = [];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass without params', () => {
        const filteredUsers = getFilteredUsers(users);
        const expectedResult = [];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });
});

