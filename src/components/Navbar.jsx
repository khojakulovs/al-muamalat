import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { styles } from "../styles/style";

import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
  return (
    <section className="shadow-md py-3">
      <nav className="custom-container flex justify-between items-center">
        {/* Navbar start */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-15 h-14" alt="logo" />
          <h3 className={`font-semibold text-[22px] ${styles.mainColor}`}>
            AL MUAMALAT
          </h3>
        </div>

        {/* Navbar middle */}
        <div className="flex items-center">
          <ul className="flex gap-5">
            <li>
              <a href="#">Home</a>
            </li>

            <div className="dropdown dropdown-bottom dropdown-center">
              <div tabIndex={0} role="li" className="flex items-center gap-1">
                Click <FaAngleDown />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>

            <li>
              <a href="#">Finance Tools</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Navbar end */}
        <div className="flex items-center gap-5">
          <div className="dropdown w-[50px] dropdown-bottom dropdown-center">
            <div tabIndex={0} role="li" className="flex items-center gap-1">
              ENG <FaAngleDown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <Link
            to={"/login"}
            className={`px-6 py-2 rounded-[8px] ${styles.mainBackColor} text-white`}
          >
            Sign In
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
