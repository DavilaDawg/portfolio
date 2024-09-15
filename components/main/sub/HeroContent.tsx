"use client"; // framer motion uses react hooks which can be used only in client comps

import React from "react";
import { motion } from "framer-motion";
import {
	slideInFromTop,
	slideInFromLeft,
	slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export const HeroContent = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
		>
			<div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
				<motion.div
					variants={slideInFromTop}
					className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
				>
					<SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
					<h1 className="Welcome-text text-[20px] mr-2">Isabella Davila</h1>
				</motion.div>

				<motion.div
					variants={slideInFromLeft(0.5)}
					className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
				>
					<span>
						Aspiring astronaut, with
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
							{" "}
							unwavering{" "}
						</span>
						determination
					</span>
				</motion.div>

				<motion.p
					variants={slideInFromLeft(0.8)}
					className="text-lg text-gray-400 my-5 max-w-[600px]"
				>
					As a senior in Aerospace Engineering at the University of Colorado
					Boulder, with minors in Russian and Geology, and a graduate of
					Codeworks, I offer a unique combination of skills and passion. I have
					expertise in JavaScript, TypeScript, React, Angular, and Next.js. I have
					developed projects, such as Rover&Out, an educational web app on Mars
					exploration and Hop, a real-time browser-sharing tool designed for
					teamwork. I also have experience refactoring a colleges mobile app for
					dogs called PawGang. My dedication to learning and problem-solving
					drives me to tackle complex challenges and make meaningful
					contributions. Let us create something remarkable together!
				</motion.p>

				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<motion.a
					variants={slideInFromLeft(1)}
					className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
				>
					Learn More!
				</motion.a>
			</div>
			<motion.div
				variants={slideInFromRight(0.8)}
				className="w-full h-full flex justify-center items-center"
			>
				<Image
					src={"/mainIconsdark.svg"}
					alt={"work icons"}
					height={650}
					width={650}
				/>
			</motion.div>
		</motion.div>
	);
};
