/* 

--expressjs-basic-start-template, by ossab_, the DM Program Team--

Basic express.js start template, to start your project faster!!

*/

// <IMPORT SECTION>

//Packages
const express = require('express');
const bodyParser = require('body-parser');

// </IMPORT SECTION>

// <APP CONFIG>

const app = express();
app.set('view engine', 'ejs'); // YOU CAN CHANGE IT TO PUG, ETC... IF YOU WANT TO USE HTML, DELETE THIS LINE!!
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 3000 || process.env.PORT;

// </APP CONFIG>

app.get('/', (req, res) => {
    res.render('index.ejs'); // Now you must go your way and build an amazing app...
})

// <CONNECTION>

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});

//</CONNECTION>