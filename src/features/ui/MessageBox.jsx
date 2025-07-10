import PropTypes from "prop-types";

function MessageBox({ display }) {
  const style = display === true ? "block" : "hidden";
  return (
    <div className={style}>
      <div className="w-[100%] h-[100%] bg-stone-400 flex items-center justify-center">
        <p>
          Please Enter your name first 😊(tip: click at the logo to return home)
        </p>
      </div>
    </div>
  );
}
MessageBox.propTypes = {
  display: PropTypes.bool,
};
export default MessageBox;
