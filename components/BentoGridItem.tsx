"use client";

import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import ProjectPopup from "./ProjectPopup";

export const BentoGridItem = ({
  id,
  title,
  description,
  img,
}: {
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
}) => {
  const getItemClassName = () => {
    switch (id) {
      case 1:
        return "lg:col-span-2 md:col-span-2 row-span-1 ";
      case 2:
        return "lg:col-span-7 md:col-span-7 row-span-1  ";
      case 3:
        return "lg:col-span-3 md:col-span-9 row-span-1 cursor-pointer";
      case 4:
        return "lg:col-span-6 md:col-span-9 row-span-2";
      case 5:
      case 6:
      case 7:
        return "lg:col-span-1 md:col-span-3 row-span-1";
      default:
        return "";
    }
  };

  const getTitleClassName = () => {
    switch (id) {
      case 1:
      case 5:
      case 6:
      case 7:
        return "justify-center  p-4 px-10 sm:px-3 md:items-center";
      case 2:
        return "justify-center p-10 min-h-44";
      case 3:
      case 4:
        return "justify-start p-10";
      default:
        return "";
    }
  };

  const renderContent = () => {
    switch (id) {
      case 2:
        return <TechStack />;
      case 4:
        return <ProjectLinks />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/0 hover:border-white/20 group transition duration-200 shadow-lg bg-[#141414] flex flex-col justify-between  ${getItemClassName()}`}
    >
      <Toaster position="top-right" />
      <div className="h-full group">
        {img && (
          // <div className="absolute -right-5 -bottom-1">
          <div className="absolute -right-5 -bottom-1">
            <img
              src={img}
              alt={title?.toString()}
              className=" w-48 sm:w-80 group-hover:translate-x-2 transition-transform duration-300"
              // className="object-cover object-center group-hover:translate-x-2 transition-transform duration-300"
            />
          </div>
        )}
        {id === 5 || id === 6 || id === 7 ? (
          <div
            className="flex h-full w-full justify-center items-center p-4 lg:p-0 cursor-pointer text-5xl"
            onClick={() => {
              if (id === 5) {
                if (navigator.clipboard) {
                  navigator.clipboard
                    .writeText("prosissestha8@gmail.com")
                    .then(() => {
                      toast("Email copied to clipboard!");
                    })
                    .catch((err) => {
                      console.error("Failed to copy email:", err);
                      window.location.href = "mailto:prosissestha8@gmail.com";
                    });
                } else {
                  window.location.href = "mailto:prosissestha8@gmail.com";
                }
              } else if (id === 6) {
                window.open("https://github.com/prosis-shrestha", "_blank");
              } else if (id === 7) {
                window.open(
                  "https://www.linkedin.com/in/prosis-shrestha-a1278422a/",
                  "_blank"
                );
              }
            }}
          >
            {id === 5 ? (
              <FaEnvelope />
            ) : id === 6 ? (
              <FaGithub />
            ) : (
              id === 7 && <FaLinkedin />
            )}
          </div>
        ) : id === 3 ? (
          <div
            className={`flex flex-col h-full ${getTitleClassName()}`}
            onClick={() => {
              window.open("cv.pdf", "_blank");
            }}
          >
            <h2 className="font-sans text-3xl font-bold z-10">{title}</h2>
          </div>
        ) : (
          <div className={`flex flex-col h-full ${getTitleClassName()}`}>
            {/* <h2 className="font-sans text-3xl font-bold z-10">{title}</h2> */}
            <h2 className="font-sans text-3xl font-bold z-10">{title}</h2>
            <p className="font-sans font-extralight text-base text-[#C1C2D3] z-10">
              {description}
            </p>
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

const TechStack = () => {
  const techLists = [
    ["MongoDB", "SQL"],
    ["ExpressJS", "Git"],
    ["ReactJS", "Typescript"],
    ["NodeJS", "NextJS"],
  ];

  return (
    <div className="flex gap-1 lg:gap-20 md:gap-10 3xl:gap-28 absolute justify-center right-2 sm:right-5 opacity-50 sm:opacity-80 ">
      {techLists.map((list, listIndex) => (
        <div
          key={listIndex}
          className={`flex flex-col gap-8 ${
            listIndex % 2 !== 0 ? "relative -bottom-6" : ""
          }`}
        >
          {list.map((item, itemIndex) => (
            <span
              key={itemIndex}
              className="py-4 px-3 text-xs 3xl:py-5 3xl:px-4 md:text-base 3xl:text-xl rounded-lg text-center bg-[#212121]"
            >
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

const ProjectLinks = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | {
    name: string;
    desc: string;
    href: string;
    languages: string[];
    thumbnail: string;
    inProgress: boolean;
  }>(null);

  const projects = [
    {
      name: "First Call - Ambulance Service",
      href: "https://first-call-frontend.onrender.com/",
      languages: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Leaflet.js",
      ],
      thumbnail: "3.png",
      desc: "First Call is a web app enabling quick access to available ambulances via map markers. It displays real-time routes, ensuring efficient navigation and rapid emergency assistance when needed.",
      inProgress: false,
    },
    {
      name: "Thrifitfy - C2C webapp for buying and selling",
      href: "https://github.com/prosis-shrestha/Thriftify",
      languages: ["MERN", "TypeScript", "Socket.io", "Stripe", "Leaflet"],
      thumbnail: "1.png",
      desc: "MERN Stack application for buy and sell of wearables with messaging, product boosting and nearby items suggestion features along with chatbot integration.",
      inProgress: true,
    },
    {
      name: "AttenD",
      href: "https://github.com/prosis-shrestha/AttenD",
      languages: ["JavaScript", "SQL", "Python", "Framer Motion"],
      thumbnail: "2.png",
      desc: "AttenD, your event intelligence hub, captures attendee details, compiles stall reviews, and showcases it all in a sleek dashboard. Elevate your event analysis with AttenD's dynamic features!",
      inProgress: true,
    },
  ];

  const handleProjectClick = (project: {
    name: string;
    desc: string;
    href: string;
    languages: string[];
    thumbnail: string;
    inProgress: boolean;
  }) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  return (
    <>
      <div
        className="flex flex-col
    mt-5 h-full gap-3 justify-evenly overflow-y-scroll no-scrollbar"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleProjectClick(project)} // Prevent default action and open popup
            className="flex rounded-2xl bg-[#212121] hover:bg-[#313131]/60 transition duration-200 cursor-pointer"
          >
            <img
              src={project.thumbnail}
              className="h-30 w-2/5 sm:w-1/5 rounded-s-2xl object-cover"
            />
            <div className="flex flex-col justify-center px-6 w-3/5 sm:w-4/5 items-start gap-1 font-sans">
              <h1 className=" font-medium truncate text-lg w-full">
                {project.name}
              </h1>
              <p className="truncate w-full font-extralight text-sm text-[#C1C2D3]">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ProjectPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        project={selectedProject}
      />
    </>
  );
};
