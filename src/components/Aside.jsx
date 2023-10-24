import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <>
      <aside className="site-aside hidden fixed md:flex flex-col pt-28  items-center bg-[#232D3F] z-10 left-0 top-0 min-w-[300px] h-screen">
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
                <i className="fa-solid fa-briefcase text-inherit"></i>Portfolio
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
      </aside>
    </>
  );
};

export default Aside;
