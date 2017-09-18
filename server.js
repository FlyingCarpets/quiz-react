const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const BUILD_DIR = path.join(__dirname, './dist/');

const app = express();

const port = 8080;

// TODO: for later use
// app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', express.static(BUILD_DIR));

// TODO: for creating/getting users
// const users = [{ name: 'Rita'}, { name: 'Deividas '}];
// app.get('/api/users', (req, res) => {
//     res.send(users);
// });
// app.post('/api/users', (req, res) => {
//     users.push({ name: req.body.name });
//     res.send(200);
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

// Error handling
app.use((error, req, res, next) => {
    console.log(error); // TODO log unknown error
    res.status(500).send('error');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
