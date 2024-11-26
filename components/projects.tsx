"use client";
import { projectsData } from "@/utils/projectsData";
import Image from "next/image";
import React, { useState } from "react";
import ImageModal from "./modals/imageModal";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentURL, setCurrentURL] = useState("");

  return (
    <div
      id="recent-projects"
      className="w-full flex flex-col justify-center items-center"
    >
      <h3 className="text-4xl mb-5 lg:mb-20 md:text-6xl font-bold text-transparent bg-gradient-to-r from-gray-200/90 to-gray-400/90 bg-clip-text">
        WHAT I'VE BUILT RECENTLY
      </h3>

      <section className="p-8 w-full">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((data, index) => {
            return (
              <div key={index} className="w-full flex flex-col">
                <div
                  onClick={() => {
                    setIsModalOpen(true);
                    setCurrentURL(data.img);
                  }}
                  className="w-full group rounded-lg overflow-hidden bg-gray-800 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 group-hover:opacity-60 transition duration-300"></div>
                </div>

                <div className=" text-white mt-5">
                  <h3 className="text-xl font-semibold mb-1">{data.name}</h3>
                  <p className="text-sm text-gray-300 text-justify">
                    {data.description}
                  </p>

                  <div className="flex space-x-3">
                    {data.url && (
                      <Link href={data.url} target="_blank">
                        <p className="text-blue-500 hover:underline mt-2">
                          View Project
                        </p>
                      </Link>
                    )}

                    {data.web && (
                      <Link href={data.web} target="_blank">
                        <p className="text-blue-500 hover:underline mt-2">
                          Website
                        </p>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full mt-20 flex items-center justify-center">
          <Link
            href={
              "https://drive.google.com/drive/folders/1mSsgjPlPRPr7JrPP_n6PxCbTccDEzaXM?usp=drive_link"
            }
            className="text-gray-200 text-lg hover:underline flex items-center"
          >
            MORE PROJECTS <BsArrowRight className="ml-2" />
          </Link>
        </div>

        {currentURL !== "" && (
          <ImageModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            currentURL={currentURL}
          />
        )}
      </section>
    </div>
  );
};

export default Projects;
