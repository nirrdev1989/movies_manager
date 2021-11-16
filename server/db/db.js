const mongoose = require('mongoose');

async function connectMongoDB() {
   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/movies_manager', {
         useUnifiedTopology: true,
         useNewUrlParser: true,
         // useFindAndModify: false
      });

      console.log('CONNECT TO DATABASE');

   } catch (error) {
      console.log('CONNECT TO DATABASE FAIL');
      process.exit(1);
   }
}

module.exports = { connectMongoDB };