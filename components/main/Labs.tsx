"use client";

import type React from "react";

interface LabReport {
	id: number;
	title: string;
	pdfUrl: string;
	description: string;
}

const labReports: LabReport[] = [
	{
		id: 1,
		title: "Aerospace Computing - Satellite Tracking Using C++",
		pdfUrl:
			"https://drive.google.com/file/d/11_2r9IrR4zb3Kjg10ZCZDbRiC7JVgR90/view?usp=drive_link",
		description: `This project conducts satellite tracking and ground station communication planning. By simulating satellite orbits and determining their visibility from a ground station, operators can schedule communication windows, avoid signal loss periods, and optimize the placement of additional ground stations to ensure continuous coverage. The code generates satellite positions over three days by rotating initial coordinates based on Earth's rotation, saving them to "CBPosition.csv. It reads the positions of two satellites and the ground station from CSV files, calculating visibility for each minute by determining the masking angle. Results (1 for visible, 0 for not visible) are written to "Sat1Visibility.csv" and "Sat2Visibility.csv". The output consists of CSV files containing the satellites' positional data and visibility status relative to the ground station, useful for further analysis and validation of visibility patterns.`,
	},
	{
		id: 2,
		title:
			"Wind Tunnel Aerodynamics and Structural Analysis of a Clark Y14 Airfoil Using MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/1lUNbakVRxSlUk1uewpZLcr_4KQ-Y_uH0/view?usp=sharing",
		description:
			"This lab focused on analyzing the aerodynamic properties and structural loading of a Clark Y14 airfoil using MATLAB. In milestone one, airspeed in a wind tunnel was calculated using pressure data from a Pitot-static tube, finding a maximum velocity of 18.82 m/s with uncertainty. Milestone two calculated the coefficients of lift and drag for different angles of attack, comparing results to NACA data, with deviations likely due to wind tunnel limitations. Milestone three involved structural analysis, calculating deflection, stress, and strain under different load distributions. The experimental deflection matched closely with numerical results for trapezoidal loading, while rectangular loading caused the most deflection",
	},
	{
		id: 3,
		title: "Mortgage Analysis Using Differential Equations and MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/1JVLXOXqFV_-Fiu4W73ymAC-ZNiFrAmlR/view?usp=sharing",
		description:
			"This lab used MATLAB to apply Differential Equations in comparing mortgage plans for a $750,000 loan, including a 10-year fixed mortgage at 3%, a 30-year fixed mortgage at 5%, and a variable rate. MATLAB was used to calculate monthly payments, total costs, and to implement Euler’s method for approximating loan amounts over time, with smaller timesteps improving accuracy. The 10-year plan had higher payments but a lower total cost, while the 30-year plan had lower payments and higher costs. Larger monthly payments were shown to reduce total interest, while adjustable rates provided short-term savings at the expense of long-term costs.",
	},
	{
		id: 4,
		title: "Image Manipulation and Compression Using MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/1tVfQOrHFt-Wj2Bl_uE4Mg9Z_YwfbTl5b/view?usp=drive_link",
		description:
			"This lab explores image manipulation and compression using MATLAB through matrix operations. Key tasks include loading and converting images, adjusting exposure, altering colors, and performing transformations like shifting, flipping, and transposing. The lab also demonstrates image compression using the Discrete Sine Transform (DST), analyzing how different compression ratios affect image quality. Results highlight the relationship between matrix manipulations and storage efficiency. The report includes MATLAB code and explanations for each operation.",
	},
	{
		id: 5,
		title: "Design and Analysis of a Roller Coaster Pilot Simulator in MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/1YvuyX_h8m3uozVSqL3FxaPJx9k9k2fkr/view?usp=sharing",
		description:
			"This lab presents the design and analysis of a roller coaster pilot simulator using MATLAB, integrating virtual reality goggles for basic flight training simulations. The simulator features components such as loops, zero-G parabolas, banked turns, and braking sections, all adhering to specified G-load limitations. Equations were derived from force body diagrams and Newton’s Second Law to calculate G-forces in various directions, and these were implemented in MATLAB to visualize the pilot's path and the associated G-forces. The design treats the pilot as a point mass and assumes a frictionless track with ideal banking to simplify calculations. Recommendations for future projects include deriving motion equations before MATLAB implementation and creating separate functions for smooth transitions between simulator components.",
	},
	{
		id: 6,
		title: "Feedback Control for Locomotive Crank Using MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/1X3jI4_MxRCXkJPU6ikrMu61BQwkCwIZn/view?usp=sharing",
		description:
			"This lab focused on designing and implementing a closed-loop transfer function for feedback control in a Locomotive Crank model, comparing it with experimental data. Discrepancies between the theoretical model and real-world results were attributed to assumptions like neglecting natural damping and friction. While simplifying the model, these assumptions reduced accuracy in reflecting mechanical interactions.",
	},
	{
		id: 7,
		title: "Simulating Dynamics and Equations of Motion Using MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/1EaHhRWPbbD-HHWJ0Mdfaf13qFYftrg3W/view?usp=sharing",
		description:
			"This lab simulates equations of motion using MATLAB's ODE solver. Problem 1 explores both converging and diverging system behaviors. Problem 2 models projectile motion, analyzing the impact of wind speed, altitude, and object mass on landing location and total distance traveled. Results show a direct relationship between wind speed and horizontal displacement, as well as mass effects on motion.",
	},
	{
		id: 8,
		title:
			"Motion Capture and Euler Angle Dynamics Experiment and Modeling In MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/11Zp3KN6UFFLwawGsWXYjXx2m148sq5Vo/view?usp=sharing",
		description:
			"This lab investigates the dynamics of an aerospace vehicle and a target through motion capture and the analysis of relative positions and orientations. Using MATLAB, the 3-2-1 and 3-1-3 Euler angle rotation sequences were applied to calculate Direction Cosine Matrices (DCM) for both objects. The position and attitude of the vehicle and target were tracked in both inertial and body frames. Key results include the relative positions in the inertial frame and body frame, as well as the Euler angles that describe their orientations over time",
	},
	{
		id: 9,
		title:
			"Electronics - Voltage Dividers, Grounding, and Signal Conditioning Analysis",
		pdfUrl:
			"https://drive.google.com/file/d/1kBvODwrhuVy8ABsYjCYZfHRqbJfOAAd3/view?usp=sharing",
		description:
			"This lab covers experiments on voltage dividers, grounding, equivalent circuits, and accelerometer measurements. Key findings include the impact of grounding on voltage measurements and the importance of proper signal conditioning for accurate accelerometer data. The results highlight the effects of impedance and the need for careful circuit analysis to achieve precise measurements.",
	},
	{
		id: 10,
		title:
			"Electronics - AC/DC Coupling, RC Circuits, and Power Supply Analysis",
		pdfUrl:
			"https://drive.google.com/file/d/1HDg7Lg4EPGiPzFwo8S6n59vJT5AOuz7S/view?usp=sharing",
		description:
			"This lab investigates AC/DC coupling and RC circuits through precise oscilloscope and multimeter analysis. It examines the impact of coupling on signal integrity, derives and evaluates RC time constants, and analyzes the output waveform of a rectifier under different load conditions. Capacitor values were computed theoretically and validated via experimental measurements, ensuring alignment with expected circuit behavior.",
	},
	{
		id: 11,
		title:
			"Electronics - Frequency Domain and Low-Pass Filter Design for Signal Conditioning With MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/1kyR0rs1kNZ0RVn7uS6xV7z4L2NTxeTwu/view?usp=sharing",
		description:
			"In this lab, we explored the frequency content of various signals using both time and frequency domain analysis. Key measurements such as peak-to-peak voltage, RMS voltage, and signal frequency were determined through power spectral density plots and Fourier analysis. We designed and tested a low-pass filter circuit, recording the effects on signal attenuation as frequency increased, confirming theoretical corner frequency behavior. Experimental results showed how signal filtering and spectral analysis can be used to condition signals in practical applications. The lab also involved assessing the filter's roll-off rate, confirming a 20 dB per decade decline past the cutoff frequency.",
	},
	{
		id: 12,
		title:
			"Electronics - Zener Diodes, DC-DC Conversion, Linear Regulation, and Power Switching Using MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/16wBSpIKbWWutfrI0dLli_Uu1OEhROWUy/view?usp=sharing",
		description:
			"The experiments focused on evaluating Zener diode behavior under varying input voltages, analyzing a DC-DC converter's performance, assessing the stability of a linear power regulator, and examining transistor-based power switching. Key findings include the identification of a Zener diode breakdown voltage of 5.56 V, DC-DC conversion efficiency affected by load resistance, linear regulator efficiency variations with different resistive loads, and the switching characteristics of MOSFETs. The efficiency of power regulation techniques was quantified, revealing significant differences between linear and DC-DC methods.",
	},
];

const Labs: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full py-10 pb-56">
			<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
				Lab Reports
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4">
				{labReports.map((report) => (
					<div key={report.id} className="relative group">
						<a
							href={report.pdfUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
						>
							<div className="w-16 h-20 bg-red-500 mb-2 flex items-center justify-center rounded">
								<span className="text-white font-bold">PDF</span>
							</div>
							<span className="text-center text-white">{report.title}</span>
						</a>
						{/* Tooltip Popup */}
						<div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 w-screen max-w-2xl">
							<div className="bg-gray-800 text-white text-sm md:text-base rounded-lg p-6 shadow-lg">
								<p className="whitespace-pre-wrap break-words">
									{report.description}
								</p>
							</div>
							{/* Arrow pointing to the report card */}
							<div className="w-4 h-4 bg-gray-800 rotate-45 transform origin-top-left absolute top-full left-1/2 -ml-2" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Labs;
