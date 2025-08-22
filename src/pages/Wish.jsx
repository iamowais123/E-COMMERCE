import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishLists } from "../redux/wishlistSlice";

const Wish = () => {
  
  const state = useSelector((state) => state.wishList.items);
  const dispatch = useDispatch();
  // console.log(state);

  return (
    <>
      <div className="cart-products w-full flex justify-center mt-5 flex-col gap-5 items-center">
        {state.length > 0 ? (
          <h1 className="text-5xl font-bold ">Your Wishlist Items</h1>
        ) : (
          <h1 className="text-5xl font-bold ">
            No Wishlist Items Are Available
          </h1>
        )}
        {state.map((el) => {
          return <div key={el.id} className="cart w-1/3 h-40 flex border-b-black border-b-2">
          <div className="left flex justify-center w-96 items-center p-3 gap-2">
            <img
              src={el.image}
              className="w-20"
            />
            <h1 className="leading-[22px] ">
             {el.title}
            </h1>
          </div>
          <div className="right flex items-center gap-64 p-4 w-1/2">
            <button 
            className="px-5 py-2 bg-red-500 rounded-xl font-bold focus:outline-none cursor-pointer"
            onClick={() => dispatch(removeFromWishLists(el.id))}
            >
              Remove
            </button>
          </div>
        </div>
        })}
      </div>
    </>
  );
};

export default Wish;
