module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  "testMatch": [
    "**/?(*.)+(spec|test).[t]s?(x)"
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/.*/dist/.*"
  ],
};