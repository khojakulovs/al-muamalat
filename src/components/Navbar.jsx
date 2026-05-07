// react-router-dom
import { Link } from "react-router-dom";

import { request } from "../services/request";
// assets
import { logo, menu, close } from "../assets/index";

// styles
import { styles } from "../styles/style";

// react-icons
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const { data: courseList } = useQuery({
    queryKey: ["course-list"],
    queryFn: () => request.get("/courses/main").then((res) => res?.data),
  });

  const toggleHandle = () => setToggleNav((prev) => !prev);

  return (
    <section className="shadow-md py-3">
      <nav className="custom-container flex justify-between items-center relative">
        {/* Navbar start */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-10 h-10 md:w-15 md:h-14" alt="logo" />
          <h3
            className={`font-semibold text-[18px] md:text-[22px] hidden lg:block ${styles.mainColor}`}
          >
            AL MUAMALAT
          </h3>
          <img
            src={toggleNav ? close : menu}
            className="block sm:hidden w-8 h-8 object-cover"
            onClick={toggleHandle}
          />
        </div>

        {/* Toggle drop */}
        <div
          className={`${!toggleNav ? "hidden" : "flex"} side-sidebar custom-container justify-between py-3 z-50 bg-base-100 shadow-md absolute top-13 left-0 right-0 `}
        >
          <ul className="flex w-full justify-around items-center">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <a href="#">Finance Tools</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Navbar middle */}
        <div className="sm:flex hidden items-center">
          <ul className="flex gap-5">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <div className="dropdown dropdown-bottom dropdown-center">
              {/* Trigger */}
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 cursor-pointer px-4 rounded-xl 
    hover:bg-base-200 transition-all duration-200 select-none"
              >
                <span className="">Courses</span>

                <FaAngleDown className="text-xs opacity-60 mt-[1px]" />
              </div>

              {/* Dropdown */}
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-2xl z-[100] 
    w-60 p-2 mt-3 shadow-xl border border-base-200"
              >
                {courseList?.data?.map((course) => (
                  <li key={course.course_id}>
                    <Link
                      to={`/programs/${course.course_id}`}
                      className="rounded-xl py-3 text-sm font-medium 
          hover:bg-base-200 transition-all duration-150"
                    >
                      {course.name_uz}
                    </Link>
                  </li>
                ))}
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
            className={`px-4 md:px-6 py-1 md:py-2 ${styles.radiusBtn} ${styles.mainBackColor} text-white active:scale-95 transition-all duration-200`}
          >
            Sign In
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
