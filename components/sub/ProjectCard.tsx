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
              src="/hackathon3.png"
              alt="Project 1"
              fill
            />
          </div>
          <h2 className="mt-8 text-purple-800 text-xl font-bold text-center">
            Hackathon 3 Furniture Website
          </h2>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://hackathon-3-website-opal.vercel.app/">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/NarmeenAsghar/hackathon-3-website.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src="/blogWebsite.png"
              alt="Project 2"
              fill
            />
          </div>
          <h2 className="mt-8 text-purple-800 text-xl font-bold text-center">
            Blog Website
          </h2>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://milestone-3-blog-website-beta.vercel.app/">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/NarmeenAsghar/milestone-3-blog-website.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src="/jewelryWebsite.png"
              alt="Project 3"
              fill
            />
          </div>
          <h2 className="mt-8 text-purple-800 text-xl font-bold text-center">
            Jewelry Website
          </h2>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://vercel.com/narmeen-asghar/milestone-3-ecommerce-website">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/NarmeenAsghar/milestone-3-ecommerce-website.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src="/miniWebsite.png"
              alt="Project 4"
              fill
            />
          </div>
          <h2 className="mt-8 text-purple-800 text-xl font-bold text-center">
            Mini Website
          </h2>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://mini-website-using-custom-css.vercel.app/">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/NarmeenAsghar/mini-website-using-custom-css.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 5 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src="/birthdayWish.png"
              alt="Project 5"
              fill
            />
          </div>
          <h2 className="mt-8 text-purple-800 text-xl font-bold text-center">
            Birthday Wish App
          </h2>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://nextjs-birthday-wish-app.vercel.app/">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/NarmeenAsghar/Nextjs-BirthdayWish-app.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 6 */}
        <div className="flex flex-col p-4 border border-gray-600 bg-[#030014] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-[#100a31] rounded-2xl">
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
            <Image
              src="/portfolio.png"
              alt="Project 5"
              fill
            />
          </div>
          <h2 className="mt-8 text-purple-800 text-xl font-bold text-center">
            HTML CSS based Portfolio
          </h2>
          <div className="flex flex-col xl:flex-row justify-center gap-4 mt-4">
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://portfolio-rosy-seven-86.vercel.app/">
                Live Demo
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/NarmeenAsghar/portfolio.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 7 */}
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
              <Link href="https://vercel.com/narmeen-asghar">
                Vercel
              </Link>
            </Button>
            <Button className="bg-slate-600 rounded-e-xl">
              <Link href="https://github.com/NarmeenAsghar">Github</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
