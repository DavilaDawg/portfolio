"use client";

import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

export const Navbar = () => {
	const scrollToSection = (sectionId: string) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
			<div className="relative w-full h-full flex items-center justify-between">
				{/* Centered buttons */}
				<div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						onClick={() => scrollToSection("hero")}
						className="bg-purple-950 px-4 py-2 rounded text-white font-bold"
					>
						About Me
					</button>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						onClick={() => scrollToSection("projects")}
						className="bg-purple-950 px-4 py-2 rounded text-white font-bold"
					>
						Projects
					</button>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button
						onClick={() => scrollToSection("lab-reports")}
						className=" bg-purple-950 px-4 py-2 rounded text-white font-bold"
					>
						Lab Reports
					</button>
				</div>

				{/* Social Icons aligned to the right */}
				<div className="ml-auto flex flex-row gap-5">
					{Socials.map((social) => (
						<a
							href={social.url}
							target={social.name === "Mail" ? "_self" : "_blank"}
							rel="noopener noreferrer"
							key={social.name}
						>
							<Image
								src={social.src}
								alt={social.name}
								key={social.name}
								width={30}
								height={30}
							/>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
