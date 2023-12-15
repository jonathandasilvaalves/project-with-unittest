const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("Authentication", () => {
    beforeEach( async () => {
        await truncate();
    });

    it("should authenticate with valid credentials", async () => {
        const user = await factory.create('User', {
            password: '13455'
        });

        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "13455"
            });
        
        expect(response.status).toBe(200);
    });

    it('should not authenticate with invalid credentials', async () => {
        const user = await factory.create('User', {
            password: '13455'
        });

        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "123456"
            });
        
        expect(response.status).toBe(401);
    });

    it("should return jwt token when authenticated", async () => {
        const user = await factory.create('User', {
            password: '123456'
        });

        const response = await request(app)
            .post("/sessions")
            .send({
                email: user.email,
                password: "123456"
            });
        
        expect(response.body).toHaveProperty("token");
    });

    it("should validate if user exist", async () => {
        
        const response = await request(app)
            .post("/sessions")
            .send({
                email: "emailinvalid@teste.com.br",
                password: "123456"
            });

        expect(response.status).toBe(401);
    });
})