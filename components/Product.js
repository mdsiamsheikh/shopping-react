import React from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const addItemsToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
      setCartItem((prevState) => [...prevState, product]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }

    toast(`${product.name} added to cart`);
  };

  return (
    <div className="bg-[#fff] pt-6 pb-4 shadow-2xl rounded-[10px]">
      <img
        className="mx-auto w-[350px] h-[200px] object-contain px-12"
        src={product.image}
        alt=""
      />

      <div className="px-6 mt-4">
        <div className="flex items-center justify-between text-[26px]">
          <h1>{product.name}</h1>
          <h3>${product.price}</h3>
        </div>

        <button
          className="block px-12 py-4 mx-auto mt-4 text-white rounded-[6px] bg-red-600 hover:bg-red-800"
          onClick={addItemsToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
