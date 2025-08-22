import { FaBagShopping } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {

  const cart = useSelector((state) => state.cart.items);
  const wish = useSelector((state) => state.wishList.items);

  return (
    <div className="w-full h-15 bg-black text-white flex items-center justify-between p-8">
      <div className="logo flex items-center gap-1">
        <Link to="/" className="cursor-pointer text-2xl">
          V-Shop
        </Link>
        <Link to="/" className="cursor-pointer text-2xl">
          <FaBagShopping />
        </Link>
      </div>
      <div className="search flex items-center gap-5 bg-white w-96 p-1.5 rounded-2xl">
        <input
          type="text"
          className="w-full text-black border-none focus:outline-none"
          placeholder="Search any product"
        />
        <button>
          <IoSearchOutline className="text-black text-2xl mr-2" />
        </button>
      </div>
      <div className="cart-wish flex items-center gap-7">
        <div className="cart flex items-center relative">
          <Link to="/cart" className="cursor-pointer text-2xl">
            <FiShoppingCart />
          </Link>
          <span className="absolute bottom-4 right-1.5">{cart.length}</span>
        </div>
        <div className="wish flex items-center relative">
          <Link to="/wish" className="cursor-pointer text-2xl">
            <FcLike />
          </Link>
          <span className="absolute bottom-4 right-2">{wish.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
