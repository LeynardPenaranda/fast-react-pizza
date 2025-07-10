import LinkButton from "../ui/LinkButton";
import Button from "../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getCart, clearCart } from "./cartSlice";
import { getUsername } from "../users/userSlice";
import { AnimatePresence } from "framer-motion";
function Cart() {
  // eslint-disable-next-line
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  function handleClear() {
    dispatch(clearCart());
  }
  return (
    <div className="px-4 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 font-semibold text-xl">Your cart, {username}</h2>
      {cart.length === 0 ? (
        <>
          <p className="mt-8 mb-5">{username} your CART is Empty... 🤔</p>
          <Button to="/menu" type="primary">
            &larr; Go Add some pizzas
          </Button>
        </>
      ) : (
        <>
          <ul className="divide-y divide-stone-200 border-b mt-3 ">
            <AnimatePresence>
              {cart.map((item) => (
                <CartItem item={item} key={item.pizzaId} />
              ))}
            </AnimatePresence>
          </ul>
          <div className="mt-6 space-x-2">
            <Button to="/order/new" type="primary">
              Order pizzas
            </Button>

            <Button type="secondary" onClick={handleClear}>
              Clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
