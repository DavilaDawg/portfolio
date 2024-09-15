import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

export const Navbar = () => {
	return (
		<div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
			<div className="w-full h-full flex items-center justify-between px-[10px]">
				<div className="flex-grow flex justify-end">
					<div className="flex flex-row gap-5">
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
		</div>
	);
};
