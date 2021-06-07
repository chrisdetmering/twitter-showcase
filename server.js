require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();


const searchRouter = require('./routes/searchRouter');
const userRouter = require('./routes/userRouter');

const port = process.env.PORT || 8080;

app.use('/search', searchRouter);
app.use('/user', userRouter);


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
});


app.listen(port, () => console.log(`Listening on port ${port}`))