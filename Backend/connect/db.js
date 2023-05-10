const mongoose = require("mongoose")


const connect = () => {
    mongoose.connect(process.env.MONGO_URL, {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
        .then(() => console.log('Connected to MongoDB'))
        .catch(error => console.error(error));
}
module.exports = connect
