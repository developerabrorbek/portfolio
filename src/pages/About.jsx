import DownloadButton from "../components/Buttons";

const About = () => {
  const myAge = new Date().getFullYear() - 2005;
  return (
    <div className="home-page min-h-screen bg-[#0F0F0F] p-12">
      <h1 className="text-white text-[38px] border-b font-semibold inline-block border-[#dc6b24] mb-20">
        About <span>me <i className="fa-solid fa-right-long text-[24px]"></i></span>
      </h1>

      <h2 className="text-white font-medium text-[28px] mb-8">
        I am a <span>FullStack MERN | PERN developer</span>
      </h2>
      <p className="text-white font-mono text-[16px] mb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        dolorem optio soluta. Ad a eveniet blanditiis repellat aliquam quod
        neque cumque non, quisquam repellendus quo. Dolores aliquid id eligendi
        maiores exercitationem obcaecati suscipit reiciendis, molestias nemo,
        ipsa saepe fuga magnam dicta! Atque inventore aut beatae tempora, quam
        in quis? Dolor quod minus delectus ducimus, magni quaerat doloribus?
        Dolores odio asperiores quasi quia quaerat unde aliquid quo, consectetur
        neque reprehenderit officiis eum commodi libero rem incidunt, pariatur
        corporis maiores quod laborum aspernatur vero porro quos aperiam
        repudiandae. Corrupti dolor minus doloremque eos, ea quasi deleniti
        autem consequuntur illo corporis similique aliquid?
      </p>

      <ul className="about-me list-none max-w-[700px] grid grid-cols-2  gap-3 mb-8">
        <li>Birthday: 5 July 2005</li>
        <li>City: Tashkent, Uzbekistan</li>
        <li>Phone: +998 93 938 64 62</li>
        <li>Age: {myAge}</li>
        <li>Degree: Bachelor(currently)</li>
        <li>Email: abdulkhamidovabrorbek@gamil.com</li>
        <li>Freelance: Available</li>
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
          <ul className="grid grid-cols-2 gap-2">
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
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
          <ul className="grid grid-cols-2 gap-2">
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <span className="block h-1 rounded-sm bg-[#dc6b24]"></span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="skill-body flex justify-between pe-2 items-center">
                <p className="text-white">HTML</p>
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
