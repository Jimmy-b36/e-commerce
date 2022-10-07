import { useNavigate } from 'react-router-dom';
import { FC, useState, useEffect } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { userRequest } from '../helpers/requestMethods';
const STRIPE_PUBLIC = process.env.REACT_APP_STRIPE_PUBLIC as string;
interface IPay {
  children: React.ReactNode;
  cart: {
    products: [{ productId: string; quantity: number }];
    subtotal: number;
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
    const total = Number(((cart.subtotal * 1.12 + 5.7) * 100).toFixed(2));
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/payment', {
          tokenId: stripeToken!.id,
          amount: total,
        });
        return navigate('/success', {
          state: { stripeData: res.data, products: cart },
        });
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
          billingAddress
          shippingAddress
          description={
            'Your total is $' +
            (cart.subtotal * 1.12 + 5.7).toFixed(2) +
            ' CAD.'
          }
          amount={(cart.subtotal * 1.12 + 5.7) * 100}
          token={onToken}
          stripeKey={STRIPE_PUBLIC}
        />
      )}
    </div>
  );
};

export default Pay;
