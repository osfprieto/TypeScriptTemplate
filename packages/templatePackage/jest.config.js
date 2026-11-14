const { createDefaultPreset } = require('ts-jest');

module.exports = {
    ...createDefaultPreset(),
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/*.test.ts'],
    restoreMocks: true,
};