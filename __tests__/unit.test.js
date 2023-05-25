// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
describe('isPhoneNumber tests', () => {
    test('validPhone1', () => {
        expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    });

    test('validPhone2', () => {
        expect(functions.isPhoneNumber('(+1) 234-5678')).toBe(true);
    });

    test('invalidPhone1', () => {
        expect(functions.isPhoneNumber('123-456-789')).toBe(false);
    });

    test('invalidPhone2', () => {
        expect(functions.isPhoneNumber('123 234 5678')).toBe(false);
    });
});

describe('isEmail tests', () => {
    test('validEmail1', () => {
        expect(functions.isEmail('myqiu@ucsd.edu')).toBe(true);
    });

    test('validEmail2', () => {
        expect(functions.isEmail('bob@gmail.com')).toBe(true);
    });

    test('invalidEmail1', () => {
        expect(functions.isEmail('abc.efg@ucsd.edu')).toBe(false);
    });

    test('invalidEmail2', () => {
        expect(functions.isEmail('bob')).toBe(false);
    });
});

describe('isStrongPassword tests', () => {
    test('strongPassword1', () => {
        expect(functions.isStrongPassword('abcd')).toBe(true);
    });

    test('strongPassword2', () => {
        expect(functions.isStrongPassword('qwiuefnq')).toBe(true);
    });

    test('weakPassword1', () => {
        expect(functions.isStrongPassword('????df')).toBe(false);
    });

    test('weakPassword2', () => {
        expect(functions.isStrongPassword('as')).toBe(false);
    });
});

describe('isDate tests', () => {
    test('validDate1', () => {
        expect(functions.isDate('1/1/2023')).toBe(true);
    });

    test('validDate2', () => {
        expect(functions.isDate('5/24/2023')).toBe(true);
    });

    test('invalidDate1', () => {
        expect(functions.isDate('1-1-23')).toBe(false);
    });

    test('invalidDate2', () => {
        expect(functions.isDate('5/24/23')).toBe(false);
    });
});

describe('isHexColor tests', () => {
    test('validColor1', () => {
        expect(functions.isHexColor('000')).toBe(true);
    });

    test('validColor2', () => {
        expect(functions.isHexColor('F0F0F0')).toBe(true);
    });

    test('invalidColor1', () => {
        expect(functions.isHexColor('ZZZ')).toBe(false);
    });

    test('invalidColor2', () => {
        expect(functions.isHexColor('dwfawfadfasdfasdf')).toBe(false);
    });
});

