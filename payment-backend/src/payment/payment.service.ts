//The below code uses the Stripe service to handle payment processing logic and 
//utilizes a DTO (Data Transfer Object) making it modular, customizable and configurable

import { Injectable } from '@nestjs/common';
import { StripeService } from '../stripe/stripe.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private stripeService: StripeService) {}

  async processPayment(createPaymentDto: CreatePaymentDto) {
    const { amount, currency } = createPaymentDto;
    return this.stripeService.createPaymentIntent(amount, currency);
  }
}

// Comment the above code and use this instead to use the custome SDK for payment service and testing purposes
//If npm link of module doesnt work we can imposrt {Stripe provider} and {config} directly as import {StripeProvider} from '../../../payment-sdk/src/providers/StripeProvider'


/*
import { Injectable } from '@nestjs/common';
import { PaymentProviderFactory } from '../../../payment-sdk/src/factories/PaymentProviderFactory';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentService {
  private paymentProvider; // This can be any provider like StripeProvider, PayPalProvider, etc., decided at runtime

  constructor() {
    // Here, you could decide which provider to use dynamically based on app logic or configuration
    this.paymentProvider = PaymentProviderFactory.getProvider('Stripe'); // or 'PayPal', etc.
  }

  async processPayment(createPaymentDto: CreatePaymentDto) {
    const { amount, currency } = createPaymentDto;
    // Assuming createPaymentIntent is a standardized method in your IPaymentProvider interface
    return this.paymentProvider.createPaymentIntent(amount, currency);
  }
}

*/