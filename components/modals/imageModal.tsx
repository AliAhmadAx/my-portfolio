import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const ImageModal = ({
  isModalOpen,
  setIsModalOpen,
  currentURL,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (arg0: boolean) => void;
  currentURL: string;
}) => {
  return (
    <div
      onClick={() => {
        setIsModalOpen(false);
      }}
      className={`bg-black/20 backdrop-blur-lg w-screen h-screen flex items-center justify-center fixed top-0 left-0 rounded-lg shadow-lg ${
        isModalOpen ? "block" : "hidden overflow-hidden"
      }`}
    >
      <IoMdClose
        onClick={() => {
          setIsModalOpen(false);
        }}
        className="text-2xl text-white fixed top-5 right-10 border border-white cursor-pointer hover:text-white/80"
      />

      <Image
        src={currentURL}
        alt="clicked image"
        width={1200}
        height={400}
        className="rounded-lg absolute"
      />
    </div>
  );
};

export default ImageModal;
