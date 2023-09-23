import { MdOutlineComputer } from "react-icons/md";
import { BiServer } from "react-icons/bi";
import { BsServer } from "react-icons/bs";

function Skills() {
  return (
    <>
      <div className="w-full max-sm:h-[300px] h-[350px] bg-[#3A3848] rounded-l-3xl my-5 flex flex-row items-center text-[#fff] max-sm:ml-[-7.5rem] max-sm:w-screen">
        <div className=" w-[55%] h-[250px] flex items-center justify-evenly ml-10 max-lg:w-[75%]">
          <div className="w-[150px] h-[inherit] flex flex-col items-center justify-center">
            <MdOutlineComputer size={60} color="#6295ca" />
            <h2 className="text-white text-2xl max-sm:text-xl">Frontend</h2>
            <div className="bg-light-gray w-[90px] h-[1px] my-3"></div>
            <p className="text-center text-white w-28 h-28 font-light text-base max-sm:text-sm">
              HTML, CSS, JS, React, NextJS, Tailwind
            </p>
          </div>
          <div className="w-[150px] h-[inherit] flex flex-col items-center justify-center">
            <BiServer size={60} color="#6295ca" />
            <h2 className="text-white text-2xl max-sm:text-xl">Backend</h2>
            <div className="bg-light-gray w-[90px] h-[1px] my-3"></div>
            <p className="text-center text-white w-28 h-28 font-light text-base max-sm:text-sm">
              NodeJS, ExpressJS, Firebase
            </p>
          </div>
          <div className="w-[150px] h-[inherit] flex flex-col items-center justify-center">
            <div className="skillsIcon w-[60px] h-[60px] flex justify-center items-center">
              <BsServer size={45} color="#6295ca" />
            </div>

            <h2 className="text-white text-2xl max-sm:text-xl">Data</h2>
            <div className="bg-light-gray w-[90px] h-[1px] my-3"></div>
            <p className="text-center text-white w-28 h-28 font-light text-base max-sm:text-sm">
              MySQL, MongoDB
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-left items-center w-[45%] max-lg:hidden">
          <div className=" bg-accent w-[3px] rounded-md h-36 mr-5"></div>
          <blockquote className="w-[25vw] text-white font-normal text-lg">
            Obviously as a Full-Stack-Developer I don&apos;t know every
            technology / framework, so if you or your company use different tech
            stacks I am always open to learning something new!
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default Skills;
