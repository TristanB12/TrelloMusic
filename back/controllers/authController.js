const User = require('../models/User')
const jwt = require('jsonwebtoken')

function jwtSignUser(user) {
    const SECRET_STRING = 'mysecretstring'
    const ONE_DAY = 60 * 60 * 24

    return jwt.sign(
        {userId: user},
        SECRET_STRING,
        {expiresIn: ONE_DAY})
}

module.exports = {
    login(req, res) {
        User.findOne({email: req.body.email})
            .then(user => {
                if(!user)
                    return res.status(400).json({
                        message: 'adress mail not found'
                    })
                if(user.password === req.body.password)
                    return res.status(200).json({
                        token: jwtSignUser(user._id),
                        user: user
                    })
                else
                    return res.status(400).json({
                        message: 'wrong password'
                    })
            })
    },
    signup(req, res) {
        const user = new User({
            email: req.body.email,
            password: req.body.password
        })
        user.save()
            .then(user => res.status(200).json({
                message: 'user created',
                user: user
            }))
            .catch(error => res.status(400).json({
                error: error,
                message: 'Adress mail already used'
            }))
    }
}

/* USE THIS TO DROP USER DATABASE
        User.remove({}, function(err) {
            console.log('collection removed')
        });*/