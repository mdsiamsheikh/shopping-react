import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import CartList from "../components/CartList";
import Navbar from "../components/Navbar";

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  const createCheckoutSession = async () => {
    axios
      .post("api/checkout_sessions", { cartItem })
      .then((res) => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />

      <div className="container mx-auto">
        {cartItem.length <= 0 ? (
          <h1 className="mt-32 text-4xl text-center">Your Cart Is Empty</h1>
        ) : (
          cartItem.map((item) => <CartList key={item.id} data={item} />)
        )}

        {cartItem.length > 0 && (
          <div className="max-w-[800px] mx-auto mt-4">
            <h2 className="text-3xl font-bold text-right">
              Total: ${totalPrice()}
            </h2>
            <button
              className="block px-12 py-4 mx-auto mt-4 text-right text-white bg-red-600 hover:bg-red-800"
              onClick={createCheckoutSession}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
