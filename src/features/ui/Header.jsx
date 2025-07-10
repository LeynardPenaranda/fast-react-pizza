import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../users/Username";

function Header() {
  return (
    <header className="bg-yellow-400 uppercase px-4 py-3 border-b-[2px] border-stone-200 flex items-center justify-between ">
      <Link to="/" className="tracking-[5px] font-pizza">
        Fast React Pezza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
