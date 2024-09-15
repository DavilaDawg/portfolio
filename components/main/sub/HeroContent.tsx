"use client"; // framer motion uses react hooks which can be used only in client comps

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	slideInFromTop,
	slideInFromLeft,
	slideInFromRight,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export const HeroContent = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	const handleLearnMoreClick = () => {
		setIsExpanded(!isExpanded);
	};

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
					expertise in JavaScript, TypeScript, React, Angular, and Next.js. I
					have developed projects, such as Rover&Out, an educational web app on
					Mars exploration and Hop, a real-time browser-sharing tool designed
					for teamwork. I also have experience refactoring a mobile app for dogs
					called PawGang. My dedication to learning and problem-solving drives
					me to tackle complex challenges and make meaningful contributions. Let
					us create something remarkable together!
					{isExpanded && (
						<span className="block mt-4">
							With a background in Aerospace Engineering and software
							development from Codeworks, I thrive in high-pressure,
							collaborative environments. At codeworks, I studied for 12 hours a
							day, 6 days a week for 3 months. My passion for learning often led
							me to stay until 2 or 3 a.m, driven by the sheer enjoyment of my
							work and the desire to produce projects I could be proud of. I
							rapidly developed expertise in algorithms, data structures,
							JavaScript, TypeScript, frameworks and more. At the University of
							Colorado Boulder, I served as a Calculus 1 Learning Assistant and
							participated in the NASA Student Launch Initiative, enhancing my
							ability to communicate complex ideas. My leadership experience
							includes serving in the Air Force ROTC, where I consistently
							ranked in the top third in the nation's 8th largest detachment. As
							Safety and Public Affairs Officer in the Honor Guard, I founded
							the club's Instagram page, gaining 1,000 followers in six months,
							and was awarded the Warrior Spirit Award for leadership and
							morale. I also served as Logistics Technician and was selected as
							one of eight superintendents, becoming second in command of the
							operations branch. Balancing Aerospace Engineering with minors in
							Geology and Russian and expertise in software development, I aim
							to tackle challenges from multiple perspectives. I'm also pursuing
							a private pilot's license and practicing Brazilian Jiu-Jitsu,
							underscoring my commitment to personal growth and development.
						</span>
					)}
				</motion.p>

				<motion.a
					variants={slideInFromLeft(1)}
					className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
					// biome-ignore lint/a11y/useValidAnchor: <explanation>
					onClick={handleLearnMoreClick}
				>
					{isExpanded ? "Show Less" : "Learn More!"}
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
