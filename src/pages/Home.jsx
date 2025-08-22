import { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import Products from "../components/Products";
import Loading from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();

  const { error, items, loading } = useSelector((state) => state.products);
  // Redux store me products slice ke andar ke state ko extract kar rahe hain
  // items = product list
  // loading = API call chal rahi hai ya nahi
  // error = agar API me error aaya toh uska message

  useEffect(() => {
    // 👉 Yahan fetchProducts() ko direct call nahi karte, balki dispatch(fetchProducts()) karte hain, kyunki thunk ek action hai jo async logic handle karta hai.

    dispatch(fetchProducts());

    // jaise hi component mount hota hai (page pe load hota hai)
    // thunk dispatch hota hai → API call fire hoti hai

    // console.log(items);
  }, [dispatch]); // iske dependency me hamlog dispatch likhna ek linting rule lekin agar nahi bhi likhege tabhi mera code chalega

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-center mt-40 text-8xl font-bold">Error : {error}</p>
    );
    
  return (
    <>
      <div className="mt-10 flex flex-wrap gap-20 p-10 justify-center">
        {items.map((el) => {
          return (
            <Products
              el={el}
              key={el.id}
              id={el.id}
              title={el.title}
              image={el.image}
              price={el.price}
              rating={el.rating.rate}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
