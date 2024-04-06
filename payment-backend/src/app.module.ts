// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentModule } from './payment/payment.module';
import { StripeModule } from './stripe/stripe.module'; //comment or remove when using custom sdk
// import { PaymentSdkModule } from './payment-sdk/payment-sdk.module'; // Import your custom SDK module


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PaymentModule,
    StripeModule, //comment or remove when using custom sdk
    // PaymentSdkModule, // Use your custom SDK module

  ],
})
export class AppModule {}
