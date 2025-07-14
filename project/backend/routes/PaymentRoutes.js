const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // from your .env

router.post('/checkout', async (req, res) => {
  try {
    const { price, method } = req.body;

    if (!price || !method) {
      return res.status(400).json({ error: 'Price and payment method are required.' });
    }

    // price is assumed to be in Rs (INR), convert to paisa (smallest unit)
    const amountInPaisa = Math.round(price * 100);

    if (amountInPaisa < 50) {
      return res.status(400).json({ error: 'Minimum payment must be at least Rs 0.50.' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',               // Stripe-supported currency
            product_data: {
              name: `Rs. ${price} ${method} Payment`,  // Shows Rs. in Stripe checkout UI
            },
            unit_amount: amountInPaisa,   // amount in paisa (integer)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/payment-success',
      cancel_url: 'http://localhost:3000/payment-failed',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

module.exports = router;
