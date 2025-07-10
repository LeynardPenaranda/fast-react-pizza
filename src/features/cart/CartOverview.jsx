import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { getTotalCartQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../utils/helpers";
import { getUsername } from "../users/userSlice";
import { useEffect, useState } from "react";
import MessageBox from "../ui/MessageBox";
function CartOverview() {
  const cartQuantity = useSelector(getTotalCartQuantity);
  const cartPrice = useSelector(getTotalCartPrice);
  const username = useSelector(getUsername);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (username !== null) {
      setIsOpen(false);
    }
  }, [username, setIsOpen]);
  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4 sm:px-6 flex items-center justify-between">
      <p className="text-stone-300 font-semibold space-x-2">
        <span>Price: {formatCurrency(cartPrice)}</span>
      </p>
      <MessageBox display={isOpen} />
      {username === "" ? (
        <ShoppingCartIcon
          onClick={() => setIsOpen(true)}
          className="hover:text-stone-400"
        />
      ) : (
        <Link to="/cart" className="relative z-0">
          <ShoppingCartIcon className="hover:text-stone-400" />
          <p className="absolute -top-4 left-3 text-yellow-800 z-10 bg-yellow-200 rounded-full px-2">
            {cartQuantity > 0 ? (cartQuantity > 9 ? `9+` : cartQuantity) : null}
          </p>{" "}
          &rarr;
        </Link>
      )}
    </div>
  );
}

export default CartOverview;
