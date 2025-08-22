import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishLists } from "../redux/wishlistSlice";

const Products = ({ id, title, image, price, rating, el }) => {
  // basically mere addToCart function me pura product yani object paas karna hai aur ham wohi kar rahe hai , el me store kar rahe hai pass karke home component se

  // const cart = useSelector((state) => state.cart.items);
  // console.log(cart);

  // const state = useSelector((state) => state.wishList.items);
  // console.log(state);

  const dispatch = useDispatch();
  return (
    <>
      <div
        className="card w-60 border-2 border-black p-4  transition-transform transform hover:-translate-y-1 hover:scale-105 rounded-2xl cursor-pointer
        shadow-md hover:shadow-xl"
        key={id}
      >
        <div className="image w-full h-60 object-cover">
          <img src={image} className="h-full object-cover" />
        </div>
        <h1 className="text-center mt-0.5">{title}</h1>
        <div className="rat-price flex items-center justify-center gap-13 mb-3">
          <h1>Rating : {rating}</h1>
          <h1>price ₹{price}</h1>
        </div>
        <div className="buttons flex gap-10">
          <button
            className="  transition-transform transform hover:-translate-y-1 hover:scale-105
             shadow-md hover:shadow-xl px-3 py-1 cursor-pointer flex items-center justify-center font-bold bg-slate-400 rounded-xl outline-none"
            onClick={() => dispatch(addToCart(el))}
          >
            Add To Cart
          </button>
          <button
            className="  transition-transform transform hover:-translate-y-1 hover:scale-105
            shadow-md hover:shadow-xl px-3 py-1 cursor-pointer flex items-center justify-center font-bold bg-red-400 rounded-xl"
            onClick={() => dispatch(addToWishLists(el))}
          >
            Add to WishList
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
