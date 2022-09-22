const mongoose = require('mongoose');
const password='sonic_tool'
const db='BookMarket'

module.exports = () => {
    mongoose.connect(process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}
