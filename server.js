if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;
const compression = require('compression');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
    app.use(compression());
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.post('/payments', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd',
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) return res.status(500).send({ error: stripeErr });
        res.status(200).send({ success: stripeRes });
    });
});

app.listen(port, () => console.log('server is runnign on port : ', port));
