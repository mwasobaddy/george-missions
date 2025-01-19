import React, { useEffect, useRef } from 'react';

const PayPalForm = ({ amount }) => {
    const paypalRef = useRef();

    useEffect(() => {
        if (paypalRef.current && !paypalRef.current.hasChildNodes()) {
            window.paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount.toString()
                            }
                        }]
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then(details => {
                        alert('Transaction completed by ' + details.payer.name.given_name);
                    });
                },
                onError: (err) => {
                    console.error(err);
                    alert('An error occurred during the transaction');
                }
            }).render(paypalRef.current);
        }
    }, [amount]);

    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Donate with PayPal</h3>
            <div ref={paypalRef}></div>
        </div>
    );
};

export default PayPalForm;