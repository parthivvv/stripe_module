# Payment Backend Service

This Payment Backend Service is designed to facilitate seamless integration with major payment gateways such as Stripe and PayPal. It features a custom Stripe SDK wrapper to streamline Stripe interactions, direct PayPal integration, and robust validation mechanisms to ensure secure and reliable payment processing.

## Features

- **Stripe Payment Integration**: Direct integration with Stripe to handle payments.
- **Custom Stripe SDK**: A wrapper around the Stripe API to simplify and customize interactions with Stripe services.
- **PayPal Integration**: Direct integration with PayPal to offer an alternative payment method.
- **Dynamic Input Validation**: Server-side validation that dynamically adjusts based on the requirements of the selected payment gateway.
- **Validation**: Comprehensive validation strategies to ensure data integrity and security.

## Configuration and Setup

Before you begin, ensure you have Node.js and npm installed on your system. This project was developed with Node.js version 14.x or higher and npm version 6.x or higher.

### Step 1: Clone the Repository

Clone the repository to your local machine and navigate into the project directory:

### Step 2: Install Dependencies
Install the project dependencies by running:

cd payment-backend
npm install

### Step 3: Environment Configuration
Create a .env file in the root directory of the project. You'll need to add your Stripe and PayPal credentials here:

STRIPE_API_KEY=your_stripe_secret_key_here
PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here

### Step 4: Building the Custom SDK
If you're using a custom Stripe SDK developed as part of this project, you may need to build it and link it locally for development:


cd path/to/custom-stripe-sdk
npm run build
npm link
cd path/to/payment-backend
npm link custom-stripe-sdk
This creates a symbolic link to your custom SDK so that it can be used as if it were installed from npm.

### Step 5: Running the Application
To run the application in development mode with hot reload, use:


npm run start:dev
For production, first build the application:

npm run build
Then start it with:

npm run start:prod


## Using the Payment Service
## Stripe Payment Integration
The service integrates with Stripe to process payments. To initiate a payment through Stripe, you'll need to send a POST request to the appropriate endpoint with the payment details.

## PayPal Integration
Similarly, for PayPal payments, the service offers endpoints that interact with PayPal's APIs to create and process payments.

## Validation
The service includes robust validation for all incoming requests to ensure data integrity and security. It uses class-validator to enforce validation rules on payment requests.

## Screenshots
![Customer](https://github.com/parthivvv/stripe_custom_sdk/blob/main/mainpage.png)
![PaymentLanding](https://github.com/parthivvv/stripe_custom_sdk/blob/main/invalid_entry.png)
![StripePayment](https://github.com/parthivvv/stripe_custom_sdk/blob/main/API_endpoint.png)

