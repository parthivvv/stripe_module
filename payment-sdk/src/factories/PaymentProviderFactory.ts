import { ConfigService } from '@nestjs/config'; // Assuming ConfigService is used
import { StripeProvider } from '../providers/StripeProvider';
import { PayPalProvider } from '../providers/PayPalProvider';
import { IPaymentProvider } from '../interfaces/IPaymentProvider';

export class PaymentProviderFactory {
  static configService = new ConfigService(); // Instantiate ConfigService or inject it

  static getProvider(providerName: string): IPaymentProvider {
    switch (providerName) {
      case 'Stripe':
        const stripeApiKey = this.configService.get<string>('STRIPE_API_KEY');
        if (!stripeApiKey) {
          throw new Error('STRIPE_API_KEY is not defined in the configuration.');
        }
        return new StripeProvider(stripeApiKey);
      case 'PayPal':
        const paypalClientId = this.configService.get<string>('PAYPAL_CLIENT_ID');
        const paypalClientSecret = this.configService.get<string>('PAYPAL_CLIENT_SECRET');
        if (!paypalClientId || !paypalClientSecret) {
          throw new Error('PAYPAL_CLIENT_ID or PAYPAL_CLIENT_SECRET is not defined in the configuration.');
        }
        return new PayPalProvider(paypalClientId, paypalClientSecret);
      default:
        throw new Error('Unsupported payment provider');
    }
  }
  
}
