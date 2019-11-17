const mocha = require('mocha');
const chai = require('chai');
const isEqual = require('lodash').isEqual;
const expect = chai.expect;
const getFilteredUsers = require('../app/services/newUsers/getFilteredUsers');
const users = [
    [ 'Name', 'Surname', 'Salary, USD', 'Position', 'Photo', 'join_date' ],
    [ 'Jack', 'Simon', '3200', 'Software Enginer', '', '4/21/2014' ],
    [ 'Sam', 'Green', '2300', 'Buisness Analist', '', '12/23/2017' ],
    [ 'Craig', 'Nickolsen', '3400', 'Team Lead', '', '9/6/2011' ],
    [ 'Maksim', 'Mozhorov', '5600', 'Software Enginer', '', '10/2/2019' ],
    [ 'Nick', 'Levskoy', '5640', 'PM', '', '8/1/2014' ],
    [ 'Lev', 'Black', '3645', 'HR', '', '5/5/2019' ],
    [ 'Alex', 'Red', '6000', 'Buisness Analist', '', '11/18/2018' ],
    [ 'Irina', 'Blue', '4564', 'Director', '', '12/12/2005' ],
    [ 'Polina', 'Pink', '2564', 'Software Enginer', '', '5/12/2014' ],
    [ 'Yaroslav', 'Black', '3560', 'Buisness Analist', '', '12/7/2007' ],
    [ 'Kristina', 'Boldirev', '4356', 'Team Lead', '', '12/10/2012' ],
    [ 'Alexey', 'Stanov', '3456', 'PM', '', '2/28/2017' ],
    [ 'Maria', 'Tverskaya', '2343', 'HR', '', '8/8/2017' ],
    [ 'Ksenia', 'Zagorodniy', '5634', 'Software Enginer', '', '10/4/2013' ],
    [ 'Matt', 'Cauton', '5564', 'Buisness Analist', '', '10/10/2010' ],
    [ 'Sten', 'Smith', '7556', 'Team Lead', '', '7/11/2014' ]
];


describe('New filtered users', () => {
    it('Checks one new filtered user in normal situation', () => {
        const filteredUsers = getFilteredUsers(users, 1, 9 );
        const isEqualExpectAndReal = isEqual(filteredUsers, [
            {
                "name": "Jack",
                "lastName": "Simon",
                "join_date": "4/21/2014"
            }]);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Checks new 12 filtered users from page 2', () => {
        const filteredUsers = getFilteredUsers(users, 2, 1 );
        const isEqualExpectAndReal = isEqual(filteredUsers,  [
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
        ]);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Checks new 50 filtered users from page 4', () => {
        const filteredUsers = getFilteredUsers(users, 50, 3 );
        const isEqualExpectAndReal = isEqual(filteredUsers,  []);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass Object in limit', () => {
        const filteredUsers = getFilteredUsers(users, {}, 3 );
        const isEqualExpectAndReal = isEqual(filteredUsers,  []);
        expect(isEqualExpectAndReal).to.equal(true);
    });

    it('Try to pass Array in offset', () => {
        const filteredUsers = getFilteredUsers(users, 0, [] );
        const isEqualExpectAndReal = isEqual(filteredUsers,  []);
        expect(isEqualExpectAndReal).to.equal(true);
    });
});

