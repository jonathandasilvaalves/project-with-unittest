const request = require("supertest");

const { faker } =  require("@faker-js/faker");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory =  require("../factories");

describe("Create User validation", () => {
    beforeEach( async () => {
        await truncate();
    });

    it("should return success create user", async () => {

        const response = await request(app)
            .post("/createuser")
            .send({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            });

        expect(response.status).toBe(201);
    });

    it("should validate if user exists", async () => {
        const user = await factory.create("User", {
            email: "emailtest@teste.com.br"
        });

        const response = await request(app)
            .post("/createuser")
            .send({
                name: faker.person.fullName(),
                email: user.email,
                password: "123143",
            }).expect(401, {
                 message: "Sorry, this user already exists!",
            });
    });
});