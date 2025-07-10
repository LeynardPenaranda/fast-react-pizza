import { useDispatch } from "react-redux";
import { formatCurrency } from "../utils/helpers";
import PropTypes from "prop-types";
import { deleteItem } from "./cartSlice";
import { motion } from "framer-motion";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

function CartItem({ item }) {
  //eslint-disable-next-line
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <motion.li
      key={item.pizzaId}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="py-3 sm:flex sm:items-center sm:justify-between"
    >
      <p className="mb-2">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-4">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-2">
          <UpdateItem pizzaId={pizzaId} />
          <DeleteItem handleDelete={handleDelete}>Delete</DeleteItem>
        </div>
      </div>
    </motion.li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
