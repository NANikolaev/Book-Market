const mongoose = require('mongoose');
const password='sonic_tool'
const db='BookMarket'

module.exports = () => {
    mongoose.connect(`mongodb+srv://tester:${password}@cluster0.mwgyziz.mongodb.net/${db}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}
