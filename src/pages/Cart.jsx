import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removefromCart,
} from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  // console.log(cart);

  return (
    <>
      <div className="cart-products w-full flex justify-center mt-5 flex-col gap-5 items-center">
        {cart.length > 0 ? (
          <h1 className="text-5xl font-bold ">Your Cart Items</h1>
        ) : (
          <h1 className="text-5xl font-bold ">No Cart Items Are Available</h1>
        )}
        {cart.map((el) => {
          return (
            <div
              className="cart w-11/12 h-40 flex border-b-black border-b-2"
              key={el.id}
            >
              <div className="left flex justify-center w-60 items-center p-3 gap-2">
                <img
                  src={el.image}
                  className="  transition-transform transform hover:-translate-y-1 hover:scale-105
                  shadow-md hover:shadow-xl w-25"
                />
                <h1 className="leading-[16px]">{el.title}</h1>
              </div>
              <div className="right flex items-center gap-64 p-4">
                <div className="price">price :₹{el.price}</div>
                <div className="quantity flex items-center gap-4">
                  <button
                    className="  transition-transform transform hover:-translate-y-1 hover:scale-105
                    shadow-md hover:shadow-xl px-1 py-0.5 bg-white font-bold text-xl cursor-pointer border-black border-2"
                    onClick={() => dispatch(increaseQuantity(el.id))}
                  >
                    +
                  </button>
                  <span className="text-2xl">{el.quantity}</span>
                  <button
                    className="  transition-transform transform hover:-translate-y-1 hover:scale-105
                    shadow-md hover:shadow-xl px-1.5 py-0.5 bg-white font-bold text-xl cursor-pointer border-black border-2"
                    onClick={() => dispatch(decreaseQuantity(el.id))}
                  >
                    -
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="total-price">
                    Total price : ₹{el.price * el.quantity}
                  </div>
                  <div className="rem-butt">
                    <button
                      className="  transition-transform transform hover:-translate-y-1 hover:scale-105
                      shadow-md hover:shadow-xl px-5 py-2 bg-red-500 rounded-xl font-bold focus:outline-none cursor-pointer"
                      onClick={() => dispatch(removefromCart(el.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
