const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("should encrypt user password", async () => {
        const user = await User.create({ 
            name: "Jonathan",
            email: "jalves@teste.com.br",
            password: "123567"
         });

        expect(await bcrypt.compare("123567", user.password_hash)).toBe(true);
    });

    it("the checkPassword function must return true for correct password", async () => {
        const user = await User.create({
            name: "Jalves",
            email: "jalves2@teste.com.br",
            password: "123450"
        });

        expect(await user.checkPassword("123450")).toBe(true);
    });

    it("the checkPassword function must return false for incorrect password", async () => {
        const user = await User.create({
            name: "Jalves",
            email: "jalves2@teste.com.br",
            password: "123450"
        });

        expect(await user.checkPassword("1234500")).toBe(false);
    });

    it("the gerenatedToken function should return a jwt token", async () => {
        const user = await User.create({
        name: "Jalves",
        email: "usertest@teste.com.br",
        password: "12345", 
        });

       const generateToken =  await user.generateToken();

        expect(typeof generateToken).toBe("string");
    });
})