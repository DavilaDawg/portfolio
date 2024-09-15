"use client"

import type React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    src: string;
    url: string;
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, url, title, description }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="w-full object-contain"
            />
            <div className="relative p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                >
                    View on GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;