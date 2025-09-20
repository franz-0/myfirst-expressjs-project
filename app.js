const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes.js');
 
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoutes);

app.get('/', (req,res) => {
    res.send('Hello from the Node API server')
});

//connecting to the mongodb database

mongoose.connect(process.env.MONGODB_URI)

.then(() => {
    console.log("Connected to the database")
    app.listen(PORT, () =>  {
    console.log(`The server is running at port ${PORT}`);
    });
})

.catch((error) =>{
    console.log(error, "Connection failed!")
})


