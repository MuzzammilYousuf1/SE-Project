import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cartSlice/cartSlice";

interface ProductCardProps {
  id: string | number;
  image: string;
  title: string;
  price: number;
}

const ProductCard: FC<ProductCardProps> = ({ id, image, title, price }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, image, price, quantity: 1 }));

    setShowMessage(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 50);

    setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    setTimeout(() => {
      setShowMessage(false); 
    }, 2000);
  };

  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="border-green-200 overflow-hidden rounded-lg border bg-white">
  <div className="flex justify-center p-4">
    <img
      className="w-48 h-48 object-contain"
      src={image}
      alt={title}
    />
  </div>
  <div className="p-4">
    <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
    <p className="mb-4 text-gray-600">{formattedPrice}</p>
    <div>
      <button
        className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={handleAddToCart}
      >
        Buy Now
      </button>

      {showMessage && (
        <div
          className={`fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-center p-2 rounded shadow-lg z-20 transition-all duration-500 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          Item added to cart successfully!
        </div>
      )}
    </div>
    <Link
      to={`/products/${id}`}
      className="block mt-4 text-blue-500 hover:underline"
    >
      See Details
    </Link>
  </div>
</div>

  );
};

export default ProductCard;
