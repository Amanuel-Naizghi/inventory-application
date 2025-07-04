const express = require('express');
const multer = require('multer');
const app = express();
const router = require('./routes/userRouter');

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use('/',router);

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>console.log(`You are viewing you app from this port number ${PORT}`));