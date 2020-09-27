import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_gyV4dJkq6dTNRWFIu0wS81o300iZXbLYju';

    const onToken = (token) => {
        axios({
            url: 'payments',
            method: 'post',
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then((response) => {
                alert('success');
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
                alert(
                    'there was an error with your payment. Please make sure you use the provided credit card '
                );
            });
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
