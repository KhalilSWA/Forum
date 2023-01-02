const jwt = require('jsonwebtoken');
const User = require('../models/users');
const bcrypt = require('bcrypt');

async function signup(req, res) {
    const { userName, email, phone, password } = req.body;
    try {
        const checkUser = await User.findOne({email})
        if (checkUser){
            return res.status(401).json({errors:[{msg:'User already exists'}]})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            userName,
            email,
            phone,
            password: hashedPassword
        });

        await user.save();
        const payload = {
            id: user._id
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "3d"
        });

        res.status(201).json({user,msg:'user created', token});
    } catch(error) {
        res.status(500).send('server error');
    }
}

async function signin(req, res) {
    const {email,password} = req.body;
    try {
        const user=await User.findOne({email});

        if (!user){
            return res.status(400).json({errors:[{msg:'Bad credentials'}]});
        }
        const checkPassword = await bcrypt.compare(password,user.password);
        if (!checkPassword){
        return res.status(400).json({errors:[{msg:'Bad credentials'}]});
        }

        const payload = {
            id: user._id
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "3d"
        });

        res.status(200).send({user,token})
        // console.log(user)
    } catch(error) {
        console.log(error);
        res.status(401).json(error.message);
    }
}

async function current(req, res) {
    try {
        const user=await User.findById(req.user.id)
        const payload = {
            id: user._id
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: "3d"
        });
        res.send({user,token})
        
    } catch (error) {
        res.status(500).send('server error')
    }
}

module.exports = {
    signup,
    signin,
    current
}