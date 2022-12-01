const express = require('express');
const { loginForm,registerForm } = require('./controllers/userController');

const app = express();

const {userRoutes} = require('./routes/userRoutes');

// Enable pug

app.set('view engine','pug');
app.set('views','./views');


//Routing
 app.get('/auth/register',registerForm ); 
 app.get('/auth/login',loginForm)

const PORT = 8087;

app.listen( PORT, () => console.log('Server running on port '+ PORT));