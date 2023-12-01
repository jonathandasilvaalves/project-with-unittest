const { User } = require('../models');
const yup = require("yup");

class CreteUserController {
    async create(req, res) {

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails, please review!' });
        }
      
        const {name, email, password} = req.body;

        const checkUser = await User.findOne({ where: {email}});

        if (checkUser) {
            return res.status(401).json({ message: 'Sorry, this user already exists!'});
        }
        
        const user = await User.create({
            name,
            email,
            password
        });

        console.log(user);

        return res.status(201).json(user);
    }
}

module.exports = new CreteUserController();