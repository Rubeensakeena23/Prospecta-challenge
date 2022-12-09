const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/content', (req, res) => {
    res.status(200).send({
        title: 'Rubeen',
        description: 'Nice girl'
    })
});

app.post('/content/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if(!name) {
        res.status(418).send({ message: 'We need a name! '})
    }

    res.send({
        name: '🧕 with your {name} and ID of {id}',
    });
});

app.listen(
    PORT,
    () => console.log("its alive on http://localhost:${PORT}")
);

