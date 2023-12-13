//const faker = require("faker");

const { faker } =  require("@faker-js/faker");

const { factory } = require("factory-girl");
const { User } = require("../src/app/models");


factory.define('User', User, {
    name: "Teste 2",
    email: faker.internet.email(),
    password: faker.internet.password(),
});

module.exports = factory;