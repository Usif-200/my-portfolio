"use client"
import { assets, workData } from "@/assets/assets"
import Image from "next/image"
import Link from "next/link"

const Work = () => {

  
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
           <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
           <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
           <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ">
           Welcom to my portfolio! Explore a collection of projects showcasing my expertise in front-end development.
           </p>

           <div className="grid grid-cols-auto my-10 gap-5">
            {workData.map((project, index)=>(
              <Link target="_blank" href={project.link} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <Image src={assets.send_icon} alt="" className="w-5"/>
                  </div>
                </div>
              </Link>
            ))}
           </div>
    </div>
  )
}

export default Work