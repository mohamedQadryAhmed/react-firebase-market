import { Link } from "react-router";
import { navlinks } from "../assets/data";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <header className="bg-blue-400 sticky top-0">
      <nav className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-2xl text-white text-center ml-8 ">
              Abu Hafez
            </h2>
          </Link>
        </div>
        <div className="right flex justify-center mb-4 lg:mb-0">
          <ul className="flex space-x-3 text-white font-medium text-md px-5">
            {navlinks.map(({ link, href }) => (
              <li>
                <Link to={href}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SearchBar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
