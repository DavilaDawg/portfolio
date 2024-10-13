"use client";

import type React from "react";

const Video: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
				MVP Demo Videos
			</h1>
			<div className="flex flex-col md:flex-row gap-10 px-4 md:px-10 pb-10">
				<div>
					<iframe
						width="400"
						height="300"
						src="https://www.youtube.com/embed/HEVTlkH8o5k?si=MO0X4Hs72VEgouYG"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			
				<div>
					<iframe
						width="400px"
						height="300px"
						src="https://www.youtube.com/embed/3Tw1wiJNqcU?si=o71OO9dQmWhNctkg"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
				<div>
					<iframe
						width="400px"
						height="300px"
						src="https://www.youtube.com/embed/TiK3GcXhFOo?si=6DViWZN0Jp_DTuV1"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</div>
		</div>
	);
};

export default Video;
