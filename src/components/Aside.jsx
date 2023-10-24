import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <>
      <div className="navbar-overlay hidden fixed  w-screen h-screen z-20"></div>
      <div className="burger lg:hidden bg-[#0F0F0F] pt-2 text-white text-[26px]">
        <i className="fa-solid fa-bars text-inherit"></i>
      </div>
      <aside className="site-aside fixed  z-10 left-0 top-0 ">
        <div className="aside-body hidden  lg:flex relative z-30 flex-col items-center min-w-[300px] h-screen pt-28 bg-[#232D3F]">
          <div className="logo text-3xl font-semibold tracking-wider mb-28 text-white">
            AbrorDev
          </div>

          <nav className="navbar">
            <ul className="flex flex-col gap-y-4">
              <li className="border-b px-8 py-3">
                <NavLink
                  to="/"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white"
                >
                  <i className="fa-solid fa-house text-inherit"></i>Home
                </NavLink>
              </li>
              <li className="border-b px-8 py-3">
                <NavLink
                  to="/about"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white"
                >
                  <i className="fa-solid fa-user text-inherit"></i>About
                </NavLink>
              </li>
              <li className="border-b px-8 py-3">
                <NavLink
                  to="/services"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white"
                >
                  <i className="fa-solid fa-list text-inherit"></i>Services
                </NavLink>
              </li>
              <li className="border-b px-8 py-3">
                <NavLink
                  to="/portfolio"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white"
                >
                  <i className="fa-solid fa-briefcase text-inherit"></i>
                  Portfolio
                </NavLink>
              </li>
              <li className="border-b px-8 py-3 transition-all">
                <NavLink
                  to="/contact"
                  className="flex gap-x-4 items-center font-medium text-[20px] text-white"
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
