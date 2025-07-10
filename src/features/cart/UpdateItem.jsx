import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import PropTypes from "prop-types";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
//eslint-disable-next-line
function UpdateItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center gap-2 ">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}
UpdateItem.propTypes = {
  pizzaId: PropTypes.number,
};
export default UpdateItem;
