import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-xs  tracking-wide uppercase font-semibold text-stone-800 inline-block rounded-full hover:bg-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-progress ";

  const styles = {
    primary: base + " px-4 py-3 mb-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "border-2 text-sm border-stone-300 tracking-wide uppercase font-semibold text-stone-700 inline-block rounded-full hover:bg-stone-300 transition-colors focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-progress px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
