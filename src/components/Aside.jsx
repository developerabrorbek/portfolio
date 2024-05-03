import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/logo.svg";
const Aside = () => {
  const asideEl = useRef(null);
  const overlayEl = useRef(null);

  const handleBurger = () => {
    asideEl.current.classList.remove("slide-left");
    asideEl.current.classList.add("slide-right");
    overlayEl.current.classList.remove("hidden");
  };

  const handleOverlay = () => {
    asideEl.current.classList.remove("slide-right");
    overlayEl.current.classList.add("hidden");
    asideEl.current.classList.add("slide-left");
  };

  return (
    <>
      <div className="burger-elements">
        <div
          onClick={handleOverlay}
          ref={overlayEl}
          className="navbar-overlay cursor-pointer hidden fixed top-0 left-0 w-screen bg-[#ccc7] min-h-screen z-20"
        ></div>
        <div
          onClick={handleBurger}
          className="burger lg:hidden cursor-pointer bg-[#0F0F0F] px-8 pt-4 text-white text-[26px]"
        >
          <i className="fa-solid fa-bars text-inherit"></i>
        </div>
        <aside
          ref={asideEl}
          className="site-aside fixed  w-[300px] min-h-screen  z-30 -left-[300px] top-0"
        >
          <div className="aside-body flex relative flex-col items-center  h-screen pt-20 bg-[#232D3F]">
            <i
              onClick={handleOverlay}
              className="fa-solid fa-xmark cursor-pointer absolute text-[32px] text-white top-2 right-2"
            ></i>
            <div className="logo text-4xl font-semibold tracking-wider  hover:text-[#dc6b24] transition-colors text-white">
              <a href="/" className="text-inherit">
                <img src={Logo} alt="Abrordev" className="" />
              </a>
            </div>

            <nav className="navbar">
              <ul className="flex flex-col gap-y-4">
                <li className="border-b px-8 py-3">
                  <NavLink
                    to="/"
                    onClick={handleOverlay}
                    className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                  >
                    <i className="fa-solid fa-house text-inherit"></i>Home
                  </NavLink>
                </li>
                <li className="border-b px-8 py-3">
                  <NavLink
                    to="/about"
                    onClick={handleOverlay}
                    className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                  >
                    <i className="fa-solid fa-user text-inherit"></i>About
                  </NavLink>
                </li>
                <li className="border-b px-8 py-3">
                  <NavLink
                    to="/services"
                    onClick={handleOverlay}
                    className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                  >
                    <i className="fa-solid fa-list text-inherit"></i>Services
                  </NavLink>
                </li>
                <li className="border-b px-8 py-3">
                  <NavLink
                    to="/portfolio"
                    onClick={handleOverlay}
                    className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                  >
                    <i className="fa-solid fa-briefcase text-inherit"></i>
                    Portfolio
                  </NavLink>
                </li>
                <li className="border-b px-8 py-3 transition-all">
                  <NavLink
                    to="/contact"
                    onClick={handleOverlay}
                    className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                  >
                    <i className="fa-solid fa-message text-inherit"></i>Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
      <aside className="site-aside hidden lg:block w-[300px] min-h-screen fixed  z-30 left-0 top-0 ">
        <div className="aside-body flex flex-col items-center  h-screen pt-16 bg-[#232D3F]">
          <div className="logo text-4xl font-semibold tracking-wider  hover:text-[#dc6b24] transition-colors text-white">
            <a href="/" className="text-inherit">
              <img src={Logo} alt="Abrordev" className="" />
            </a>
          </div>

          <nav className="navbar">
            <ul className="flex flex-col gap-y-4">
              <li className="border-b px-8 py-3">
                <NavLink
                  to="/"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                >
                  <i className="fa-solid fa-house text-inherit"></i>Home
                </NavLink>
              </li>
              <li className="border-b px-8 py-3">
                <NavLink
                  to="/about"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                >
                  <i className="fa-solid fa-user text-inherit"></i>About
                </NavLink>
              </li>
              <li className="border-b px-8 py-3">
                <NavLink
                  to="/services"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                >
                  <i className="fa-solid fa-list text-inherit"></i>Services
                </NavLink>
              </li>
              <li className="border-b px-8 py-3">
                <NavLink
                  to="/portfolio"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                >
                  <i className="fa-solid fa-briefcase text-inherit"></i>
                  Portfolio
                </NavLink>
              </li>
              <li className="border-b px-8 py-3 transition-all">
                <NavLink
                  to="/contact"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white transition-colors hover:text-[#dc6b24]"
                >
                  <i className="fa-solid fa-message text-inherit"></i>Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Aside;
