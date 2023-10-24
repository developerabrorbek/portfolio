const Services = () => {
  return (
    <div className="services-page min-h-screen bg-[#0F0F0F] p-12">
      <h1 className="text-white text-[38px] border-b font-semibold inline-block border-[#dc6b24] mb-20">
        My <span>services</span>
      </h1>

      <ul className="cards grid grid-cols-3 gap-4">
        <li className="service-card h-[350px] py-8 px-4 flex flex-col justify-center items-center bg-[#27374D] hover:bg-[#19376D] transition-all shadow-lg rounded-2xl">
          <div className="card-image mb-6 text-[28px] w-[60px] h-[60px] text-yellow-500 bg-[#DDE6ED] rounded-md flex items-center justify-center">
            <i className="fa-solid fa-display"></i>
          </div>
          <div className="card-body flex flex-col items-center">
            <h3 className=" font-bold text-[22px] mb-3">Web sites</h3>
            <p className=" text-center px-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              illo?
            </p>
          </div>
        </li>
        <li className="service-card h-[350px] py-8 px-4 flex flex-col justify-center items-center bg-[#27374D] hover:bg-[#19376D] transition-all shadow-lg rounded-2xl">
          <div className="card-image mb-6 text-[28px] w-[60px] h-[60px] text-yellow-500 bg-[#DDE6ED] rounded-md flex items-center justify-center">
            <i className="fa-solid fa-display"></i>
          </div>
          <div className="card-body flex flex-col items-center">
            <h3 className=" font-bold text-[22px] mb-3">Web sites</h3>
            <p className=" text-center px-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              illo?
            </p>
          </div>
        </li>
        <li className="service-card h-[350px] py-8 px-4 flex flex-col justify-center items-center bg-[#27374D] hover:bg-[#19376D] transition-all shadow-lg rounded-2xl">
          <div className="card-image mb-6 text-[28px] w-[60px] h-[60px] text-yellow-500 bg-[#DDE6ED] rounded-md flex items-center justify-center">
            <i className="fa-solid fa-display"></i>
          </div>
          <div className="card-body flex flex-col items-center">
            <h3 className=" font-bold text-[22px] mb-3">Web sites</h3>
            <p className=" text-center px-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              illo?
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;
