import DownloadButton from "../components/Buttons";

const About = () => {
  const myAge = new Date().getFullYear() - 2005;
  return (
    <div className="home-page min-h-screen bg-[#0F0F0F] p-12">
      <h1 className="text-white text-[38px] border-b font-semibold inline-block border-[#dc6b24] mb-20">
        About{" "}
        <span>
          me <i className="fa-solid fa-right-long text-[24px]"></i>
        </span>
      </h1>

      <h2 className="text-white font-medium text-[28px] mb-8">
        I am a <span>FullStack MERN | PERN developer</span>
      </h2>
      <p className="text-white font-mono text-[16px] mb-16">
        I am a FullStack developer with a strong educational background in
        Software Engineering. I have completed the FullStack developer course at
        Najot Ta&apos;lim and obtained a certification. <br/> Additionally, I hold a
        Bachelor&apos;s degree in Software Engineering from TUIT, where I achieved an
        impressive GPA of 4.12 out of 5. I have also acquired valuable skills
        through various certifications, including Coding Interview Preparations
        and Version Control from META. <br/>Furthermore, I have completed courses
        such as Learning Javascript, Advanced React, FrontEnd Developer
        Capstone, HTML CSS in Depth, and Principles of UI/UX. With expertise in
        C++, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL and more; I am
        well-equipped to handle complex projects. <br/> My proficiency extends to
        technologies like GraphQL and Apollo Server for efficient data
        management. My language proficiency includes English (B2 level), Russian
        (B1 level), German (A1 level), and Uzbek (Native). <br/> I am eager to apply
        my knowledge and skills as a FullStack developer to contribute
        effectively to your team.
      </p>

      <ul className="about-me list-none max-w-[700px] grid md:grid-cols-2  gap-3 mb-8">
        <li>
          <i className="fa-solid fa-angle-right text-[#dc6b24] mr-1"></i>
          Birthday: 5 July 2005
        </li>
        <li>
          <i className="fa-solid fa-angle-right text-[#dc6b24] mr-1"></i>City:
          Tashkent, Uzbekistan
        </li>
        <li>
          <i className="fa-solid fa-angle-right text-[#dc6b24] mr-1"></i>Phone:
          +998 93 938 64 62
        </li>
        <li>
          <i className="fa-solid fa-angle-right text-[#dc6b24] mr-1"></i>Age:{" "}
          {myAge}
        </li>
        <li>
          <i className="fa-solid fa-angle-right text-[#dc6b24] mr-1"></i>Degree:
          Bachelor(currently)
        </li>
        <li>
          <i className="fa-solid fa-angle-right text-[#dc6b24] mr-1"></i>Email:
          abdulkhamidovabrorbek@gamil.com
        </li>
        <li>
          <i className="fa-solid fa-angle-right text-[#dc6b24] mr-1"></i>
          Freelance: Available
        </li>
        <li></li>
      </ul>
      <DownloadButton />

      <div className="use mt-11  mb-20">
        <h3 className="text-white text-[28px] font-middle border-b font-semibold border-[#dc6b24] pb-1 inline-block mb-6 ">
          What I daily <span>use?</span>
        </h3>

        <div className="frontend mb-12">
          <h4 className="text-white text-[22px] mb-4 font-semibold">
            FrontEnd:
          </h4>
          <ul className="grid md:grid-cols-2 gap-2">
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">
                  CSS (SASS/SCSS, TailwindCSS, Bootstrap)
                </p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">JavaScript/TypeScript</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">React</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">Redux/Redux Toolkit</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">Material UI</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">Tanstack Query</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
          </ul>
        </div>

        <div className="backend mb-12">
          <h4 className="text-white text-[22px] mb-4 font-semibold">
            BackEnd:
          </h4>
          <ul className="grid md:grid-cols-2 gap-2">
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">JavaScript/TypeScript</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">Express</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">Multer</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">REST API/GraphQL</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">PostgreSQL/MongoDB</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">NestJS</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
