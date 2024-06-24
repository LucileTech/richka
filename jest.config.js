/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    testMatch: ["<rootDir>/tests/**/*.test.ts?(x)"]
};