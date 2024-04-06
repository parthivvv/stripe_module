// src/providers/StripeProvider.ts

import { IPaymentProvider, IPaymentOperationResult } from '../interfaces/IPaymentProvider';
import Stripe from 'stripe';

export class StripeProvider implements IPaymentProvider {
  private stripeClient: Stripe;

  constructor(apiKey: string) {
    this.stripeClient = new Stripe(apiKey, //{ apiVersion: 'Change_API_Version' } 

    );
  }

  async createPaymentIntent(amount: number, currency: string, metadata: Record<string, any> = {}): Promise<IPaymentOperationResult> {
    try {
      const paymentIntent = await this.stripeClient.paymentIntents.create({
        amount,
        currency,
        metadata,
      });
      return { success: true, data: paymentIntent };
    } catch (error) {
      let errorMessage = "An error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { success: false, error: errorMessage };
    }
  }

  async refundPayment(paymentId: string, amount?: number): Promise<IPaymentOperationResult> {
    try {
      const refund = await this.stripeClient.refunds.create({
        payment_intent: paymentId,
        amount,
      });
      return { success: true, data: refund };
    } catch (error) {
      let errorMessage = "An error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { success: false, error: errorMessage };
    }
  }
}
