// src/stripe/stripe.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
//import { IPaymentProvider, IPaymentOperationResult } from '../../../payment-sdk/src/interfaces/IPaymentProvider';


@Injectable()
export class StripeService {
//export class StripeProvider implements IPaymentProvider { #We can comment or remove line 9 and remove comment from line 10
  private stripeClient: Stripe;

  constructor(private configService: ConfigService) {
    this.stripeClient = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), //{apiVersion: 'Input Version',}
    );
  }

  async createPaymentIntent(amount: number, currency: string, paymentMethodTypes: string[] = ['card']) {
    return this.stripeClient.paymentIntents.create({
      amount,
      currency,
      payment_method_types: paymentMethodTypes,
    });
  }

  // Add more methods as needed for your SDK's functionality
}
