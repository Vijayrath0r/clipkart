import { useSelector } from "react-redux";
import ProductOfCartItem from "./ProductOfCartItem";

const ProductsOfCart = () => {
  const productsInCart = useSelector((state) => state.products.cart);

  return (
    <>
      <div className="bg-white p-5 mr-3 mt-3">
        {productsInCart && productsInCart.length > 0 ? (
          productsInCart.map((product) => (
            <ProductOfCartItem key={product.id} product={product} />
          ))
        ) : (
          <div className="flex flex-col items-center">
            <div className="text-gray-400">Your cart is empty,looks like you havn't made your choice yet.</div>
            <img src="emptyCart.jpg" alt="Empty cart" style={{ width: "400px" }} />
          </div>
        )}
      </div>
    </>
  );
};
export default ProductsOfCart;
