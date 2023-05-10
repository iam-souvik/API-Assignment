const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require("../model/user.model");      // User model to interact with database
const UserRouter = express.Router();
require("dotenv").config()








UserRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Validate input fields
    if (!username || !password) {
        return res.status(400).send({ message: 'Please provide a username and password.' });
    }

    try {
        // Check if user exists in the database
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send({ message: 'Invalid username or password.' });
        }

        // Compare password with the hashed password in the database
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).send({ message: 'Invalid username or password.' });
        }

        // Generate JWT
        const token = jwt.sign({ userid: user._id }, process.env.JWT_SECRET);

        // Send JWT in the response
        res.send({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Something went wrong.' });
    }
});




UserRouter.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    // Validate input fields
    if (!username || !password) {
        return res.status(400).send({ message: 'Please provide a username and password.' });
    }

    try {
        // Check if user already exists in the database
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).send({ message: 'Username already taken.' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user in the database
        const newUser = await User.create({ username, password: hashedPassword });

        // Send success response
        res.status(201).send({ message: 'User created successfully.', userId: newUser._id });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Something went wrong.' });
    }
});

module.exports =  {UserRouter}