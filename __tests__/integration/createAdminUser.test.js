const request = require("supertest");

const { faker } =  require("@faker-js/faker");
const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory =  require("../factories");

describe("Create admin user validation", () => {

    beforeEach( async () => {
        await truncate();
    });

    it("must validate if the user has permission to create a new admin user", async () => {

        const user =  await factory.create("User");

        const respondeAuth = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: user.password
        });
        expect(respondeAuth.status).toBe(200);
        
        const token = respondeAuth.body.token;
        const response = await request(app)
            .post("/createadmin")
            .send({
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            })
            .set('Authorization', token);

            expect(response.status).toBe(401)

    });
});


