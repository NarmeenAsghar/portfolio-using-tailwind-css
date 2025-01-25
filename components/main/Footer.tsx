import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-center">
                    <div className="font-bold text-[16px]">SOCIAL MEDIA</div>
                    <p className="flex flex-row items-center my-[4px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">
                        <a
                    href="https://github.com/NarmeenAsghar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                Github
                  </a></span>    
                    </p>
                    <p className="flex flex-row items-center my-[4px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">
                        <a
                    href="https://www.linkedin.com/in/narmeen-asghar-9582282ba"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a></span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-center">
                    <div className="font-bold text-[16px]">ABOUT</div>
                   <p className="flex flex-row items-center my-[4px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Full-stack Developer</span>    
                    </p>
                    <p className="flex flex-row items-center my-[4px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Connect with Me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[4px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">
                            <a href="mailto:pakistani47log@gmail.com">pakistani47log@gmail.com</a></span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Narmeen 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer
