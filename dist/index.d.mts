import React from 'react';

type CheckoutButtonClientProps = {
    amount?: number;
    currency?: string;
    onCheckout: () => Promise<void>;
};
declare function CheckoutButton({ amount, currency, onCheckout }: CheckoutButtonClientProps): React.JSX.Element;

declare function Hero(): React.JSX.Element;

export { CheckoutButton, Hero };
