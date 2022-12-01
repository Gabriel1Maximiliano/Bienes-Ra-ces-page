const express = require('express');


const router = express.Router();

const userRoutes = {
    getUsers:((req,res) => {
        res.send('hola desde binees raices')
    }),
    loginUsers: (req,res) => {
        res.render('auth/login');
    } 
}



module.exports ={
    userRoutes,
}
