Stripe server for local Checkout sessions

1. Copy `.env.example` to `.env` and set `STRIPE_SECRET_KEY`.
2. Install dependencies and start server:

```bash
cd stripe-server
npm install
npm start
```

The server listens on port `4242` by default and exposes `POST /create-checkout-session`.
