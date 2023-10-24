import CodeIcon from "../assets/icons/code.svg";
import DemoIcon from "../assets/icons/demo.svg";
import Nature from "../assets/nature.jpg";

const Portfolio = () => {
  const activateOpacity = () => {
    const elCards = document.querySelectorAll(".card");
    elCards.forEach((card) => card.classList.remove("opacity-50"));
  };

  const disableOpacity = () => {
    const elCards = document.querySelectorAll(".card");
    elCards.forEach((card) => card.classList.add("opacity-50"));
  };

  const handleHover = (className) => {
    const elCard = document.querySelector(`.${className}`);
    disableOpacity();
    elCard.classList.remove("opacity-50");
    elCard.classList.add("shadow-lg", "-translate-y-2", "opacity-100");
  };

  const handleAfterHover = (className) => {
    const elCard = document.querySelector(`.${className}`);
    activateOpacity();
    elCard.classList.remove("shadow-lg", "-translate-y-2", "opacity-100");
  };

  return (
    <div className="portfolio-page min-h-screen bg-[#0F0F0F] p-8 px-12">
      <h1 className="text-white text-[38px] border-b font-semibold inline-block border-[#dc6b24] mb-20">
        My{" "}
        <span>
          works <i className="fa-solid fa-right-long text-[24px]"></i>
        </span>
      </h1>
      <ul className="grid items-center justify-center md:grid-cols-2 xl:grid-cols-3 gap-8">
        <li
          onMouseOver={() => handleHover("card-1")}
          onMouseLeave={() => handleAfterHover("card-1")}
          className="card card-1 p-1  rounded-sm overflow-hidden bg-[#27374D] transition-all  max-w-[420px]"
        >
          <div className="card-image  overflow-hidden">
            <img
              src={Nature}
              alt="project image"
              className="card-image__self p-1 rounded-lg"
            />
          </div>
          <div className="card-body py-2 px-4">
            <h3 className="card-body__title text-center  text-[22px] font-semibold mb-2">
              Project name
            </h3>
            <p className="card-body__text text-center mb-5 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              saepe sint laudantium.
            </p>
            <ul className="card-body__feautures flex justify-center gap-x-2 mb-4">
              <li className="font-semibold">Sass</li>
              <li className="font-semibold">React</li>
              <li className="font-semibold">Material UI</li>
            </ul>
            <div className="card-body__links flex justify-center gap-x-4 items-center">
              <a
                href="#"
                className="card-body__link-github transition-transform  hover:-translate-y-1"
                title="Show demo"
              >
                <img src={DemoIcon} alt="demo url" className="w-9" />
              </a>
              <a
                href="#"
                className="card-body__link-code transition-transform  hover:-translate-y-1"
                title="Show code"
              >
                <img src={CodeIcon} alt="source url" className="w-8" />
              </a>
            </div>
          </div>
        </li>
        <li
          onMouseOver={() => handleHover("card-2")}
          onMouseLeave={() => handleAfterHover("card-2")}
          className="card card-2 p-1  rounded-sm overflow-hidden bg-[#27374D] transition-all max-w-[420px]"
        >
          <div className="card-image  overflow-hidden">
            <img
              src={Nature}
              alt="project image"
              className="card-image__self p-1 rounded-lg"
            />
          </div>
          <div className="card-body py-2 px-4">
            <h3 className="card-body__title text-center  text-[22px] font-semibold mb-2">
              Project name
            </h3>
            <p className="card-body__text text-center mb-5 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              saepe sint laudantium.
            </p>
            <ul className="card-body__feautures flex justify-center gap-x-2 mb-4">
              <li className="font-semibold">Sass</li>
              <li className="font-semibold">React</li>
              <li className="font-semibold">Material UI</li>
            </ul>
            <div className="card-body__links flex justify-center gap-x-4 items-center">
              <a
                href="#"
                className="card-body__link-github transition-transform  hover:-translate-y-1"
                title="Show demo"
              >
                <img src={DemoIcon} alt="demo url" className="w-9" />
              </a>
              <a
                href="#"
                className="card-body__link-code transition-transform  hover:-translate-y-1"
                title="Show code"
              >
                <img src={CodeIcon} alt="source url" className="w-8" />
              </a>
            </div>
          </div>
        </li>
        <li
          onMouseOver={() => handleHover("card-3")}
          onMouseLeave={() => handleAfterHover("card-3")}
          className="card card-3 p-1  rounded-sm overflow-hidden bg-[#27374D] transition-all  max-w-[420px]"
        >
          <div className="card-image  overflow-hidden">
            <img
              src={Nature}
              alt="project image"
              className="card-image__self p-1 rounded-lg"
            />
          </div>
          <div className="card-body py-2 px-4">
            <h3 className="card-body__title text-center  text-[22px] font-semibold mb-2">
              Project name
            </h3>
            <p className="card-body__text text-center mb-5 text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              saepe sint laudantium.
            </p>
            <ul className="card-body__feautures flex justify-center gap-x-2 mb-4">
              <li className="font-semibold">Sass</li>
              <li className="font-semibold">React</li>
              <li className="font-semibold">Material UI</li>
            </ul>
            <div className="card-body__links flex justify-center gap-x-4 items-center">
              <a
                href="#"
                className="card-body__link-github transition-transform  hover:-translate-y-1"
                title="Show demo"
              >
                <img src={DemoIcon} alt="demo url" className="w-9" />
              </a>
              <a
                href="#"
                className="card-body__link-code transition-transform  hover:-translate-y-1"
                title="Show code"
              >
                <img src={CodeIcon} alt="source url" className="w-8" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
