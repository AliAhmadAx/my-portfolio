import Link from "next/link";
import { FaLinkedin, FaMailBulk, FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-24 mb-12">
      <h3 className="text-4xl mb-10 lg:mb-20 md:text-6xl font-bold text-transparent bg-gradient-to-r from-gray-200/90 to-gray-400/90 bg-clip-text">
        CONTACT ME
      </h3>

      <div className="w-10/12 grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-10">
        <Link href={"mailto:ali.ali.ahmad22@gmail.com"} target="_blank">
          <div className="w-fit hover:bg-white/20 cursor-pointer px-10 h-52 flex flex-col items-center justify-center border rounded-lg">
            <FaMailBulk className="text-[100px] mb-3" />
            <p className="text-2xl">ali.ali.ahmad22@gmail.com</p>
          </div>
        </Link>

        <Link href={"https://wa.me/923402236319"} target="_blank">
          <div className="w-fit hover:bg-white/20 cursor-pointer px-10 h-52 flex flex-col items-center justify-center border rounded-lg">
            <FaWhatsappSquare className="text-[100px] mb-3" />
            <p className="text-2xl">+923402236319</p>
          </div>
        </Link>

        <Link
          href={"https://www.linkedin.com/in/ali-ahmad-9409021a6/"}
          target="_blank"
        >
          <div className="w-fit hover:bg-white/20 cursor-pointer px-10 h-52 flex flex-col items-center justify-center border rounded-lg">
            <FaLinkedin className="text-[100px] mb-3" />
            <p className="text-2xl whitespace-nowrap">/ali-ahmad-9409021a6</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
