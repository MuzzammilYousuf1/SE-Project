
import { useParams } from "react-router-dom";
import { API_URL } from "../config";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../state/cartSlice/cartSlice";

interface Products {
  id: string | number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: string | number; // Keeping it as string | number for flexibility
}

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState<Products | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const fetchSingleProduct = async () => {
    const response = await fetch(`${API_URL}/${productId}`);
    const data = await response.json();
    console.log("data", data);
    setProductDetails(data);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: productDetails.id,
      title: productDetails.title,
      price: Number(productDetails.price),
      image: productDetails.image,
      quantity: 1,
    }));
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

  const formattedPrice = Number(productDetails.price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="w-5/6 sm:w-1/2 mx-auto mt-10">
  {productDetails ? (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-10">
      <div className="flex flex-col sm:flex-row">
        <div className="flex justify-center w-full sm:w-1/2 p-4"> {/* Center the image container */}
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="w-52 h-52 sm:h-auto sm:w-full object-contain" // Set specific width and height
          />
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            {productDetails.title}
          </h3>
          <p className="text-sm text-gray-600 my-2">
            {productDetails.category}
          </p>
          <p className="text-sm text-gray-800 my-2 line-clamp-6">
            {productDetails.description}
          </p>
          <h5 className="text-lg text-gray-800 my-2">{formattedPrice}</h5>
          <div>
          <button
            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
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
        </div>
      </div>
    </div>
  ) : (
    <div>Product not found</div>
  )}
</div>


  );
};

export default ProductDetails;
