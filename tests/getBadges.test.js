const chai = require('chai');
const isEqual = require('lodash').isEqual;
const expect = chai.expect;
const getBadges = require('../app/services/usersWithReward/getBadges');
const users = require('./testUsers').users;

describe('Users with rewards', () => {
    it('Checks users in normal situation', () => {
        const filteredUsers = getBadges(users);
        const expectedResult = [
            {
                "name": "Jack",
                "surname": "Simon",
                "badges": [
                    {
                        "name": "Rockstar",
                        "date": "21.09.2018"
                    },
                    {
                        "name": "Happy Halloween",
                        "date": "16.11.2018"
                    }
                ]
            },
            {
                "name": "Sam",
                "surname": "Green",
                "badges": [
                    {
                        "name": "First Aid Hero",
                        "date": "21.09.2018"
                    }
                ]
            }
        ];
        const isEqualExpectAndReal = isEqual(filteredUsers, expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass with 1 user when it not empty in db', () => {
        const users = [
            [ "Name", "Surname", "Salary, USD", "Position", "Photo", "join_date" ],
            [ "Jack", "Simon", "3200", "Software Enginer", "", "4/21/2014" ]
        ];
        const filteredUsers = getBadges(users);
        const expectedResult =  [
            {
                "name": "Jack",
                "surname": "Simon",
                "badges": [
                    {
                        "name": "Rockstar",
                        "date": "21.09.2018"
                    },
                    {
                        "name": "Happy Halloween",
                        "date": "16.11.2018"
                    }
                ]
            }
            ];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass with 1 user which empty in count of users in db', () => {
        const users = [
            [ "Name", "Surname", "Salary, USD", "Position", "Photo", "join_date" ],
            [ "Polina", "Pink", "2564", "Software Enginer", "", "5/12/2014" ]
        ];
        const filteredUsers = getBadges(users);
        const expectedResult =  [];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass without params', () => {
        const users = [];
        const filteredUsers = getBadges(users);
        const expectedResult = [];
        const isEqualExpectAndReal = isEqual(filteredUsers,  expectedResult);
        expect(isEqualExpectAndReal).to.equal(true);
    });
});