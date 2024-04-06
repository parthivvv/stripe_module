// src/interfaces/IPaymentProvider.ts
export interface IPaymentOperationResult {
    success: boolean;
    data?: any;
    error?: string;
  }
  
  export interface IPaymentProvider {
    createPaymentIntent(amount: number, currency: string, metadata?: Record<string, any>): Promise<IPaymentOperationResult>;
    refundPayment(paymentId: string, amount?: number): Promise<IPaymentOperationResult>;
  }
  