import { Link } from "react-router-dom";
import MyImage from "../assets/myImage.jpg";
const Home = () => {
  return (
    <section className="home-page min-h-screen bg-[#0F0F0F] flex items-center pl-20">
      <div className="home-body w-1/2">
        <h2 className="text-white mb-6 text-[24px] font-semibold">
          Hello, my name is
          <br />{" "}
          <span className="font-mono text-[28px]">Abrorbek Abdulkhamidov</span>
        </h2>
        <h1 className="text-white mb-8 text-[36px] font-bold">
          I am a{" "}
          <span className="font-mono text-[38px]">FullStack developer</span>
        </h1>
        <p className="text-white mb-8 text-lg font-middle">
          I am a professional web developer with over 1.5 years experience.
          <br /> I can create both FrontEnd and BackEnd parts a website
        </p>
        <Link
          to="/about"
          className="inline-block px-8 py-3 bg-[#DC6B24] rounded-lg text-white"
        >
          More about me
        </Link>{" "}
      </div>
      <div className="home-image w-[400px] rounded-full overflow-hidden">
        <img
          src={MyImage}
          alt="My image"
          className="relative -top-5 scale-110"
        />
      </div>
    </section>
  );
};

export default Home;
