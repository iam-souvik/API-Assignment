const express = require('express');
const connect = require("./connect/db")
const { UserRouter } = require('./Route/user.routes');
const { TicketRouter } = require('./Route/ticket.route');
require("dotenv").config()



const app = express();
app.use(express.json());







app.use("/user",UserRouter)
app.use("/userTicket",TicketRouter)








const PORT = process.env.PORT || 8000

try {
    app.listen(PORT, async () => {
        await connect();
        console.log(`Server started on port ${PORT}`);
    });
} catch (error) {
    console.log(error);
}