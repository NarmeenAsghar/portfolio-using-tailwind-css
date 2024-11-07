import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import fullstack from "@/public/fullstack.png";

const ProjectCard = () => {
  return (
    <div className="min-h-screen pt-10 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {/* Project Card 1 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src={fullstack}
              alt="Project 1"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-2 text-purple-800 text-xl font-bold text-center">
            Project 1
          </h2>
          <p className="mt-2 text-sm text-center text-white">
            Countdown Application
          </p>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://vercel.com/careercrafters-projects/nextjs-countdown-app">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/Career01crafter/Nextjs-Countdown-app.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src={fullstack}
              alt="Project 2"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-4 text-purple-800 text-xl font-bold text-center">
            Project 2
          </h2>
          <p className="mt-2 text-sm text-center text-white">Portfolio</p>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://vercel.com/careercrafters-projects/portfolio">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/Career01crafter/portfolio.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src={fullstack}
              alt="Project 3"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-4 text-purple-800 text-xl font-bold text-center">
            Project 3
          </h2>
          <p className="mt-2 text-sm text-center text-white">
            Birthday Wish Application
          </p>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://vercel.com/careercrafters-projects/nextjs-birthday-wish-app">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/Career01crafter/Nextjs-BirthdayWish-app.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src={fullstack}
              alt="Project 4"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-4 text-purple-800 text-xl font-bold text-center">
            Project 4
          </h2>
          <p className="mt-2 text-sm text-center text-white">
            Number Guessing Game App
          </p>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://vercel.com/careercrafters-projects/nextjs-number-guessing-game">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/Career01crafter/Nextjs-Number-Guessing-Game.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 5 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src={fullstack}
              alt="Project 5"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-4 text-purple-800 text-xl font-bold text-center">
            Project 5
          </h2>
          <p className="mt-2 text-sm text-center text-white">
            Article On Diabetic Diseases
          </p>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://vercel.com/careercrafters-projects/article-diabetes-html">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/Career01crafter/Article-Diabetes-HTML.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 6 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src={fullstack}
              alt="Project 6"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="mt-4 text-purple-800 text-xl font-bold text-center">
            Visit My Accounts
          </h2>
          <p className="mt-2 text-sm text-center text-white">
            Visit my accounts for more projects
          </p>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://vercel.com/careercrafters-projects">
                Vercel
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/Career01crafter">Github</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
