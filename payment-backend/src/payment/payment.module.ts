import { Module } from '@nestjs/common';
import { StripeModule } from '../stripe/stripe.module'; //comment or remove when using custom sdk
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';

@Module({
  imports: [StripeModule], //comment or remove when using custom sdk
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}

/*
import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { PaymentSdkModule } from '../payment-sdk/payment-sdk.module'; // Import your custom SDK module

@Module({
  imports: [
    PaymentSdkModule, // Import your custom SDK module here if applicable
  ],
  providers: [PaymentService],
  controllers: [PaymentController],
})
export class PaymentModule {}
*/