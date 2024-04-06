import dotenv from 'dotenv';

dotenv.config();

export const config = {
  stripeApiKey: process.env.STRIPE_API_KEY,
  paypalClientId: process.env.PAYPAL_CLIENT_ID,
  paypalClientSecret: process.env.PAYPAL_CLIENT_SECRET,
  // You can add more configurations here for other payment providers as the SDK expands
};

// We may use this to import and use paypal
/* 
import { PayPalProvider } from './providers/PayPalProvider';
import { config } from './config';

const paypalProvider = new PayPalProvider(
  config.paypalClientId,
  config.paypalClientSecret
);

// Use `paypalProvider` for PayPal transactions
*/