const Joi = require('joi');

module.exports = {
    registerPolicy(req, res, next) {
        const filterSchema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            ),
            confirmPassword: Joi.any().valid(Joi.ref('password'))
        })
        const {error, value} = filterSchema.validate(req.body);
        console.log(error)
        if(error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).json({
                        message: 'You must provide a valid email adress'
                    })
                    break;
                case 'password':
                    res.status(400).json({
                        message: `Your password should contains:<br>
                                    - 8 to 32 characters<br>
                                    - only upper case, lower case and "0 to 9"`
                    })
                    break;
                case 'confirmPassword':
                    res.status(400).json({
                        message: 'Passwords are different'
                    })
                    break;
                default:
                    res.status(400).json({
                        message: 'Invalid registration informations'
                    })
                    break;
            }
        }
        else {
            next()
        }
    }
}