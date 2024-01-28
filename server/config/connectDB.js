const mongoose = require("mongoose");


const URI = process.env.URI;


async function connect () {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    
    
    const db = mongoose.connection;
    
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
}




module.exports = connect;