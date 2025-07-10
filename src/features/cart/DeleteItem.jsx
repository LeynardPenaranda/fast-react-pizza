import Button from "../ui/Button";
import PropTypes from "prop-types";
function DeleteItem({ children, handleDelete }) {
  return (
    <Button type="small" onClick={handleDelete}>
      {children}
    </Button>
  );
}
DeleteItem.propTypes = {
  handleDelete: PropTypes.func,
  children: PropTypes.node,
};
export default DeleteItem;
