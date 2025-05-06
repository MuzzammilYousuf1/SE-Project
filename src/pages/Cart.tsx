import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from "../state/cartSlice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveFromCart = (id: string | number) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0
    );
  };

  return (
    <div className="container mx-auto mb-10 max-w-6xl bg-white p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="w-full lg:w-3/4">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      className="h-20 w-20 object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                    <div>
                      <h2 className="text-sm sm:text-lg font-semibold text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-gray-800 font-semibold">
                          x {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <button
        className="mt-4 w-full rounded bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
        <div className="w-full lg:w-1/4">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-800">Summary</h2>
            <div className="mb-2 flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-800">
                ${calculateTotalPrice().toFixed(2)}
              </span>
            </div>
            <div className="mb-2 flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold text-gray-800">$10.00</span>
            </div>
            <div className="mt-4 flex justify-between border-t pt-4">
              <span className="font-semibold text-gray-800">Total</span>
              <span className="font-bold text-gray-900">
                ${(calculateTotalPrice() + 10).toFixed(2)}
              </span>
            </div>
            <button className="mt-6 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
