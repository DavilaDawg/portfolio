import React from 'react'
import Image from 'next/image';


interface Props {
    src: string;
    title: string;
    discription: string;
}

const ProjectCard = ({src, title, discription} : Props)  => {
  return (
    <div className = "relative overflow-hidden rounded-lg shadow-lg boarder boarder-[#2A0E61]">
        <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
        />
        <div className="relative p-4">
            <h1 className= "text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300">{discription}</p>
        </div>
    </div>
  )
}

export default ProjectCard