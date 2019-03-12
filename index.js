const express = require('express');

const mongoose = require('mongoose');

const app = express();

// const db = require()

// app.get('/', (req, res) => {
//     res.send({ hi: 'there'});
// });

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
