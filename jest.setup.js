const { beforeAll } = require('@jest/globals');

beforeAll(async () => {
    console.log("Global Before")
});
