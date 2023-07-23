// const mongoose = require('mongoose');
// require('dotenv').config();
// // const URI = 'mongodb://localhost:27017/NSS-Attendance'
// // const URI = 'mongodb+srv://govind:govind@cluster0.hdrikh3.mongodb.net/blog';
// const con = mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true});

// con.then(()=>{console.log(`Database Connected Successfully`)})
// .catch((err)=>{console.log(`Oh No Error ${err}`)});



const mongoose = require('mongoose');
const MONGOURI ='mongodb+srv://AmanAgrahari_aa:agbOl6dVejIL0bZs@cluster0.6rz03sh.mongodb.net/Attendance'
const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database Connected Successfully`);
  } catch (err) {
    console.log(`Oh No Error ${err}`);
  }
};

connectToDatabase();
