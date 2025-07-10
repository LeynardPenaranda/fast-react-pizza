import { formatCurrency } from "../utils/helpers";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { getUsername } from "../users/userSlice";

function MenuItem({ pizza }) {
  const username = useSelector(getUsername);
  //eslint-disable-next-line
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  function handleAddtoCart() {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  function handleDelete() {
    dispatch(deleteItem(id));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? `opacity-70 grayscale` : ``}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        {/* eslint-disable-next-line */}
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}
          {soldOut ? null : cart.some((item) => item.pizzaId === id) ? (
            <>
              <div className=" flex items-center justify-center gap-2">
                <DeleteItem handleDelete={handleDelete}>
                  <RemoveShoppingCartIcon />
                </DeleteItem>
                <p>Added</p>
              </div>
            </>
          ) : username === "" ? (
            <Button type="small" to="/">
              Enter your Name first😊
            </Button>
          ) : (
            <Button type="small" onClick={handleAddtoCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    imageUrl: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string), // ✅ Add this
    soldOut: PropTypes.bool, // ✅ Optional: Also add this to avoid similar future issues
  }).isRequired, // Optional: Ensure pizza prop itself is required
};
export default MenuItem;
