const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello CI/CD!'));

app.post('/', (req, res) => {
    const body = req.body;
    console.log(body);

    return res.status(200).send(body);
});

app.listen(3000, () => console.log('Server running on port 3000'));
