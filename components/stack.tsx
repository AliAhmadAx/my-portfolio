import { BiLogoRedux } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoVue } from "react-icons/io5";
import { PiScribbleLoopBold } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign, SiMui } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const Stack = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-40">
      <h3 className="text-4xl mb-10 lg:mb-20 md:text-6xl font-bold text-transparent bg-gradient-to-r from-gray-200/90 to-gray-400/90 bg-clip-text">
        MY TOOLBOX
      </h3>

      <div className="w-10/12 grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <FaReact className="text-[100px]" />
          <p className="text-2xl">React JS</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <RiNextjsFill className="text-[100px]" />
          <p className="text-2xl">Next JS</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <IoLogoVue className="text-[100px]" />
          <p className="text-2xl">Vue JS</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <TbBrandThreejs className="text-[100px]" />
          <p className="text-2xl">Three JS</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <PiScribbleLoopBold className="text-[100px]" />
          <p className="text-2xl">Fabric JS</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <BiLogoRedux className="text-[100px]" />
          <p className="text-2xl">Redix</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <RiTailwindCssFill className="text-[100px]" />
          <p className="text-2xl">Tailwind CSS</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <SiMui className="text-[100px]" />
          <p className="text-2xl">Material UI</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <BsBootstrapFill className="text-[100px]" />
          <p className="text-2xl">Bootstrap</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <SiAntdesign className="text-[100px]" />
          <p className="text-2xl">Ant Design</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <FaCss3Alt className="text-[100px]" />
          <p className="text-2xl">CSS 3</p>
        </div>

        <div className="w-52 h-52 flex flex-col items-center justify-center border rounded-lg">
          <IoLogoHtml5 className="text-[100px]" />
          <p className="text-2xl">HTML 5</p>
        </div>
      </div>
    </div>
  );
};

export default Stack;
