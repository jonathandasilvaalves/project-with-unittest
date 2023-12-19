const { Schedule, User } = require('../models');
const yup =  require('yup');
const { startOfHour, isBefore, parseISO } = require("date-fns");

class ScheduleController {
    async create(req, res) {
        const schema = yup.object().shape({
            date: yup.date().required()
        });
        
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ message: 'Validation fails, please review!' });
        }

        const { date } =  req.body;
    
        const dateFormatted = startOfHour(parseISO(date));
        
        if(isBefore(dateFormatted, new Date())){ 
            return res.status(400).json({ message: "You entered a past date, please review!"})
        }

        const checkAvailabilityDate = await Schedule.findOne({
            where: { date: dateFormatted }
        });

        const checkUser = await User.findOne({
            where: {id: req.userId}
        });

        if(!checkUser) {
            return res.status(400).json({message: "The user does not exist!"})
        }

        if(checkAvailabilityDate) {
            return res.status(400).json({message: "Sorry, date is not available!"})
        }

        const schedule = await Schedule.create({
            date: dateFormatted,
            user_id: req.userId
        });

        return res.status(201).json(schedule);
    }
}

module.exports = new ScheduleController(); 