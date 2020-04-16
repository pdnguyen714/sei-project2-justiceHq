const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb+srv://sei:sei@cluster0-xtnng.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(
    DATABASE_URL,
    {
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true
    });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})
module.exports = mongoose;