const express = require("express");
const config = require('./config');

const FakeDb = require("./fakedb");
const placesRoutes = require('./routes/places');
const path = require('path');





if (process.env.NODE_ENV ==='production'){

  const  appPath = path.join(__dirname, '..','dist');

  app.use(express.static(appPath));


  app.use('*',(req, res)=>{

    res.sendFile(path.resolve(appPath,'index.html'))

  });

}






const mongoose = require('mongoose');


mongoose.connect(config.DB_URI).then( ()=> {
    const fd =  new FakeDb();
    fd.seedDb();
    console.log("created");

    });

const app = express();


app.use('/api/v1/places',placesRoutes);

const  appPath = path.join(__dirname, '..','dist');

app.use(express.static(appPath));


app.use('*',(req, res)=>{

  res.sendFile(path.resolve(appPath,'index.html'))

});





app.listen(3001,()=>{

console.log("Server Started");

});
