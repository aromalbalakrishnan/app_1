const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/user.js")
const cors = require("cors");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
// const bodypParser = require("body-parser");


    const app = express();
    app.use(express.json());
    
    app.use(cors()); // Enable CORS for all routes

    // Connect to mongodb
  mongoose.set("strictQuery", false);
  mongoose.connect("mongodb+srv://aromal:aromal@crud.rhvwqes.mongodb.net/authapp?retryWrites=true&w=majority")
    .then(() => { 
        console.log("Connected!");       
    }).catch((err) => {
        console.log(err.message);
    })

    app.listen(1234, () =>{
        console.log("Listening to port 1234");
    });

    app.post('/api/register', async (req, res) => {
        console.log(req.body)
        try {
            const newPassword = await bcrypt.hash(req.body.password, 10)
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: newPassword,
            })
            res.json({ status: 'ok' })
        } catch (err) {
            res.json({ status: 'error', error: 'Duplicate email' })
        }
    })

    
app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

