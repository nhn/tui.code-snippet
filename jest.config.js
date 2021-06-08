/* eslint-disable strict */
module.exports = {
  moduleFileExtensions: ['js'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.spec.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: [
    './setup-globals.js'
  ],
  clearMocks: true,
  setupFilesAfterEnv: ['jest-extended']
};
