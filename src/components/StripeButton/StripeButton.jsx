import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_gyV4dJkq6dTNRWFIu0wS81o300iZXbLYju';

    const onToken = (token) => {
        console.log(token);
        alert('payment successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Ecommerce store"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svgs"
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeButton;
