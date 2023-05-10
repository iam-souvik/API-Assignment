
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Ticket = require("../model/ticket.model");      // User model to interact with database
const Authmiddleware = require('../middleware/middleware');
const TicketRouter = express.Router();
require("dotenv").config()




// http://localhost:8080/userTicket/tickets

TicketRouter.post('/tickets', Authmiddleware, async (req, res) => {
    const { numberOfTickets } = req.body;

    // Validate input fields
    if (!numberOfTickets || numberOfTickets <= 0) {
        return res.status(400).send({ message: 'Please provide a valid number of tickets.' });
    }

    try {
        const tickets = [];

        for (let i = 0; i < numberOfTickets; i++) {
            const ticket = generateTambulaTicket(); // function to generate a Tambula ticket
            const newTicket = new Ticket({ numbers: ticket, owner: req.body.userId });


            await newTicket.save();
            tickets.push(newTicket._id);
        }

        // Send ticket IDs in the response
        res.send({ tickets });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Something went wrong.', error: error._message });
    }
});



   // http://localhost:8080/userTicket/findTickets

TicketRouter.get('/findTickets', Authmiddleware, async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    try {
        const tickets = await Ticket.find({ owner: req.body.userId }).select(["numbers"]).skip((page - 1) * limit).limit(limit);

        if (tickets.length === 0) {
            return res.status(404).send({ message: 'Ticket not found.' });
        }

        // Send ticket numbers in the response
        res.send({ ticketCount: tickets.length, data: tickets });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Something went wrong.' });
    }
});


const generateTambulaTicket = () => {
    const ticket = [[], [], []];
    const row1 = ticket[0];
    const row2 = ticket[1];
    const row3 = ticket[2];
    for (let i = 0; i < 9; i++) {
        let min = 10 * i + 1;
        let max = min + 9;
        let [n1, n2, n3] = getRandomNumbers(min, max);
        row1.push(n1)
        row2.push(n2)
        row3.push(n3)
    }
    return ticket;
}

function getRandomNumbers(min, max) {
    let randomNumbers = new Array(3).fill(null);

    // Randomly generating the number zeroes should present in the column
    const noOfZeroes = Math.ceil(Math.random() * 2);

    // Randomly assign the zeroes in the column
    for (let i = 0; i < noOfZeroes; i++) {
        const randomIndex = Math.floor(Math.random() * 3);
        if (randomNumbers[randomIndex] === null) randomNumbers[randomIndex] = 0;
    }

    // Filling the nullished indexes with random numbers
    for (let i = 0; i < 3; i++) {

        // only assign for the nullish values
        if (randomNumbers[i] === null) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            let maxNum = Math.max(...randomNumbers);
            if (maxNum !== 0) min = maxNum;
            // assign the values in ascending order
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            randomNumbers[i] = randomNumber;
        }
    }

    return randomNumbers;
}


module.exports = { TicketRouter }