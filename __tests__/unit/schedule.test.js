const { Schedule, User } = require("../../src/app/models");
const truncate = require("../utils/truncate");
const { faker } = require("@faker-js/faker");

describe("Schedule", () => {
    beforeEach(async () => {
        await truncate();
    });

    it("should return the created schedule", async () => {
        const user = await User.create({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        });

        const dateSchedule = new Date();
        const schedule = await Schedule.create({
            date: dateSchedule,
            user_id: user.id,
        });

        expect(typeof schedule).toBe("object");
    });
});