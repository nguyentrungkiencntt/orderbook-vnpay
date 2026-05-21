require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors({ origin: true }));
app.use(express.json());

const calculateAmount = (items) => {
  let total = 0;
  items.forEach((item) => {
    const amt = Number(item.amount) || 0;
    total += amt * (item.quantity || 1);
  });
  return total;
};

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;
  if (!items || !Array.isArray(items)) return res.status(400).json({ error: 'Invalid items' });

  const line_items = items.map(i => ({
    price_data: {
      currency: 'vnd',
      product_data: { name: i.name },
      unit_amount: Math.round(Number(i.amount) || 0)
    },
    quantity: i.quantity || 1
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items,
      success_url: 'http://localhost:5173/complete?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:5173/checkout'
    });

    res.json({ url: session.url, id: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Add endpoint to retrieve session details for the frontend complete page
app.get('/checkout-session', async (req, res) => {
  const sessionId = req.query.sessionId;
  if (!sessionId) return res.status(400).json({ error: 'Missing sessionId' });

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['line_items', 'customer_details'] });
    res.json(session);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

const port = process.env.PORT || 4242;
app.listen(port, () => console.log(`Stripe server listening on port ${port}`));
