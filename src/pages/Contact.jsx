import DownloadButton from "../components/Buttons";

const Contact = () => {
  return (
    <div className="contact-page min-h-screen bg-[#0F0F0F] p-8 lg:p-12">
      <h1 className="text-white text-[38px] border-b font-semibold inline-block border-[#dc6b24] mb-20 ml-4 lg:ml-[70px]">
        Contact{" "}
        <span>
          me <i className="fa-solid fa-right-long text-[24px]"></i>
        </span>
      </h1>

      <div className="contact-body">
        <div className="socials flex justify-center mb-12">
          <ul className="grid xl:grid-cols-2 justify-center w-full gap-8 px-4 lg:px-16">
            <li className="flex gap-5 items-center bg-[#2C3333] py-2 px-4 rounded-md">
              <div className="location flex items-center justify-center rounded-full text-[24px] w-14 h-14 bg-[#2E4F4F]">
                <i className="fa-solid fa-location-dot text-inherit"></i>
              </div>
              <div className="location-body">
                <h3 className="text-white">My address:</h3>
                <p className="text-white">Tashkent, Uzbekistan</p>
              </div>
            </li>
            <li className="flex gap-5 items-center bg-[#2C3333] py-2 px-4 rounded-md">
              <div className="location flex items-center justify-center rounded-full text-[24px] w-14 h-14 bg-[#2E4F4F]">
                <i className="fa-solid fa-globe text-inherit"></i>
              </div>
              <div className="location-body">
                <h3 className="text-white">My socials:</h3>
                <ul className="flex items-center gap-x-2">
                  <li>
                    <a href="https://github.com/developerabrorbek" rel="noreferrer" target="_blank" className="text-[22px] transition-colors hover:text-yellow-500">
                      <i className="fa-brands fa-github text-inherit"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/abdulkhamidovabrorbek" rel="noreferrer" target="_blank" className="text-[22px] transition-colors hover:text-yellow-500">
                      <i className="fa-brands fa-linkedin text-inherit"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/abdulxamidov.abrorbek?igshid=OGQ5ZDc2ODk2ZA==" rel="noreferrer" target="_blank" className="text-[22px] transition-colors hover:text-yellow-500">
                    <i className="fa-brands fa-instagram text-inherit"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/FarTM2020" rel="noreferrer" target="_blank" className="text-[22px] transition-colors hover:text-yellow-500">
                    <i className="fa-brands fa-telegram text-inherit"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-5 items-center bg-[#2C3333] py-2 px-4 rounded-md">
              <div className="location flex items-center justify-center rounded-full text-[24px] w-14 h-14 bg-[#2E4F4F]">
                <i className="fa-solid fa-envelope text-inherit"></i>
              </div>
              <div className="location-body">
                <h3 className="text-white">Message me:</h3>
                <p className="text-white">abdulkhamidovabrorbek@gmail.com</p>
              </div>
            </li>
            <li className="flex gap-5 items-center bg-[#2C3333] py-2 px-4 rounded-md">
              <div className="location flex items-center justify-center rounded-full text-[24px] w-14 h-14 bg-[#2E4F4F]">
                <i className="fa-solid fa-phone-volume text-inherit"></i>
              </div>
              <div className="location-body">
                <h3 className="text-white">Call me:</h3>
                <p className="text-white">+998 93 938 64 62</p>
              </div>
            </li>
          </ul>
        </div>

        <form className="flex flex-col gap-4 w-full px-4 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 w-full">
            <label htmlFor="name" className="block w-full">
              <p className="text-slate-300 text-[18px] mb-1">Name</p>
              <input
                type="text"
                id="name"
                className="bg-[#2C3333] text-white outline-none p-3  rounded-md w-full"
              />
            </label>
            <label htmlFor="email" className="w-full">
              <p className="text-slate-300 text-[18px] mb-1">Email</p>
              <input
                type="text"
                id="email"
                className="bg-[#2C3333] text-white outline-none p-3 w-full  rounded-md"
              />
            </label>
          </div>
          <label htmlFor="message" className="grid">
            <p className="text-slate-300 text-[18px] mb-1">Message</p>
            <textarea
              id="message"
              className="bg-[#2C3333] text-white outline-none p-3 rounded-md "
              rows={8}
            />
          </label>
          <div className="flex flex-col self-center md:flex-row justify-center gap-4">
            <button
              type="submit"
              className="hover:bg-[#3a9648] border  hover:border-[#3a9648] bg-transparent border-[#47ca5a] text-white font-semibold text-[18px] rounded-xl p-3  w-[200px]"
            >
              Submit
            </button>
            <DownloadButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
