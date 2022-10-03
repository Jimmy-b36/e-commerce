// require('dotenv').config();
import { useNavigate } from 'react-router-dom';
import { FC, useState, useEffect } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
const axios = require('axios');

const STRIPE_PUBLIC =
  'pk_test_51LnovJCiymmOLGsSXDobZwn7okbWKOe9tvoPEjIKNoAG80A1KcW01REQUFKUBkYDFrrzl343NwUMltgDr2BkHxkE005pnaC9sR';

interface IPay {
  children: React.ReactNode;
  cart: {
    products: [{ productId: string; quantity: number }];
    subTotal: number;
  };
}

const Pay = ({ children, cart }: IPay) => {
  const [stripeToken, setStripeToken] = useState<Token | null>(null);
  const onToken = (token: Token) => {
    setStripeToken(token);
    return;
  };

  const navigate = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post('http://localhost:3001/api/payment', {
          tokenId: stripeToken!.id,
          amount: cart.subTotal * 1.12 * 100,
        });
        console.log(res.data);
        return navigate('/success');
      } catch (err: any) {
        console.log(`there was an error with the request ${err.message}`);
        return;
      }
    };
    stripeToken! && makeRequest();
  }, [stripeToken]);

  return (
    <div>
      {stripeToken ? (
        <span>Processing... wait please</span>
      ) : (
        <StripeCheckout
          name="Stickers"
          image="http://deztub.nc/uvimot"
          billingAddress
          shippingAddress
          description={
            'Your total is $' +
            ((cart.subTotal * 1.12) / 100).toFixed(2) +
            ' CAD.'
          }
          amount={cart.subTotal * 1.12}
          token={onToken}
          stripeKey={STRIPE_PUBLIC}
        />
      )}
    </div>
  );
};

export default Pay;
