const mongoose = require('mongoose');

async function connectMongoDB(uri) {
   try {
      await mongoose.connect(uri, {
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