"use client";

import type React from "react";

interface LabReport {
	id: number;
	title: string;
	pdfUrl: string;
	description: string;
	imageUrl: string;
}

const labReports: LabReport[] = [
	{
		id: 20,
		title:
			"Quadrotor Simulation and Control: Analysis of Nonlinear Dynamics, Linearization, and Feedback Stabilization",
		pdfUrl:
			"https://drive.google.com/file/d/1ZQtTOP-5BTHcDe5EANnFDlscscfTMx7S/view?usp=sharing",
		description:
			"This report examines the dynamic modeling, control design, and simulation of a quadrotor. Nonlinear equations of motion are derived and simulated, revealing instability in hovering flight without control. Linearized models and rate feedback control are implemented to improve stability, with feedback controllers designed for roll, pitch, and trajectory tracking. A comparison of linear and nonlinear models highlights the strengths and limitations of each approach. MATLAB simulations in open- and closed-loop configurations validate the findings, providing a framework for quadrotor stabilization and controlled flight.",
		imageUrl: "/lab20.png",
	},
	{
		id: 1,
		title:
			"Wind Tunnel Aerodynamics and Structural Analysis of a Clark Y14 Airfoil",
		pdfUrl:
			"https://drive.google.com/file/d/1lUNbakVRxSlUk1uewpZLcr_4KQ-Y_uH0/view?usp=sharing",
		description:
			"This lab focused on analyzing the aerodynamic properties and structural loading of a Clark Y14 airfoil using MATLAB. In milestone one, airspeed in a wind tunnel was calculated using pressure data from a Pitot-static tube, finding a maximum velocity of 18.82 m/s with uncertainty. Milestone two calculated the coefficients of lift and drag for different angles of attack, comparing results to NACA data, with deviations likely due to wind tunnel limitations. Milestone three involved structural analysis, calculating deflection, stress, and strain under different load distributions. The experimental deflection matched closely with numerical results for trapezoidal loading, while rectangular loading caused the most deflection",
		imageUrl: "/img1.png",
	},
	{
		id: 2,
		title: "Analysis of Gyroscopic Systems and Feedback Control",
		pdfUrl:
			"https://drive.google.com/file/d/19QLgBbSgEiXsrRyPfEkJ8-CeDiVqJ4YK/view?usp=sharing",
		description:
			"This lab explored the dynamics of gyroscopic systems, focusing on physical rate gyros, control moment gyros (CMG), and spacecraft control. Experiments analyzed rotational behavior, precession, and torque response under varying conditions. Calibration techniques were applied to improve measurement accuracy, and closed-loop feedback control was implemented to achieve precise orientation adjustments. Findings support the importance of gyroscopic calibration and feedback gains in optimizing system stability and control.",
		imageUrl: "/lab2.png",
	},
	{
		id: 20,
		title:
			"Simulation of Aircraft Dynamics: Trim, Short Period, Phugoid, Dutch Roll, and Doublet Responses",
		pdfUrl:
			"https://drive.google.com/file/d/1-EBkKE5FuDxYuOsFT40jpWpjuNoNNS0G/view?usp=sharing",
		description:
			"This lab investigates aircraft dynamics, focusing on three primary cases and doublet inputs to analyze longitudinal and lateral modes. Case 1 shows phugoid oscillations due to non-trim conditions with zero control inputs. Case 2 demonstrates steady flight with minimal oscillations from balanced controls. Case 3 transitions from Dutch roll and phugoid modes to an unstable spiral descent. Doublet input on the elevator excites short-period and phugoid modes, enabling estimates of natural frequencies and damping ratios.",
		imageUrl: "/lab21.png",
	}, 
	{
		id: 5,
		title: "Structural Analysis of Beam Deflection and Material Properties",
		pdfUrl:
			"https://drive.google.com/file/d/1zRVq6K1SkgJks-K1LdzMrZXvZIgSpv--/view?usp=sharing",
		description:
			"This lab examines beam deflection under various loads to analyze material stiffness and structural behavior. Measurements are compared to theoretical predictions, providing insight into load distribution and engineering applications.",
		imageUrl: "/lab22.png",
	},
	{
		id: 6,
		title: "Design and Analysis of a Roller Coaster Pilot Simulator",
		pdfUrl:
			"https://drive.google.com/file/d/1YvuyX_h8m3uozVSqL3FxaPJx9k9k2fkr/view?usp=sharing",
		description:
			"This lab presents the design and analysis of a roller coaster pilot simulator using MATLAB, integrating virtual reality goggles for basic flight training simulations. The simulator features components such as loops, zero-G parabolas, banked turns, and braking sections, all adhering to specified G-load limitations. Equations were derived from force body diagrams and Newton’s Second Law to calculate G-forces in various directions, and these were implemented in MATLAB to visualize the pilot's path and the associated G-forces. The design treats the pilot as a point mass and assumes a frictionless track with ideal banking to simplify calculations. Recommendations for future projects include deriving motion equations before MATLAB implementation and creating separate functions for smooth transitions between simulator components.",
		imageUrl: "/lab6.png",
	},
	{
		id: 7,
		title: "Feedback Control for Locomotive Crank",
		pdfUrl:
			"https://drive.google.com/file/d/1X3jI4_MxRCXkJPU6ikrMu61BQwkCwIZn/view?usp=sharing",
		description:
			"This lab focused on designing and implementing a closed-loop transfer function for feedback control in a Locomotive Crank model, comparing it with experimental data. Discrepancies between the theoretical model and real-world results were attributed to assumptions like neglecting natural damping and friction. While simplifying the model, these assumptions reduced accuracy in reflecting mechanical interactions.",
		imageUrl: "/lab7.png",
	},
	{
		id: 8,
		title: "Simulating Dynamics and Equations of Motion",
		pdfUrl:
			"https://drive.google.com/file/d/1EaHhRWPbbD-HHWJ0Mdfaf13qFYftrg3W/view?usp=sharing",
		description:
			"This lab simulates equations of motion using MATLAB's ODE solver. Problem 1 explores both converging and diverging system behaviors. Problem 2 models projectile motion, analyzing the impact of wind speed, altitude, and object mass on landing location and total distance traveled. Results show a direct relationship between wind speed and horizontal displacement, as well as mass effects on motion.",
		imageUrl: "/lab8.png",
	},
	{
		id: 9,
		title:
			"Motion Capture and Euler Angle Dynamics Experiment and Modeling",
		pdfUrl:
			"https://drive.google.com/file/d/1bY4z7khLwzMo1iyEka5Y65l-SP2B0_Lx/view?usp=sharing",
		description:
			"This lab investigates the dynamics of an aerospace vehicle and a target through motion capture and the analysis of relative positions and orientations. Using MATLAB, the 3-2-1 and 3-1-3 Euler angle rotation sequences were applied to calculate Direction Cosine Matrices (DCM) for both objects. The position and attitude of the vehicle and target were tracked in both inertial and body frames. Key results include the relative positions in the inertial frame and body frame, as well as the Euler angles that describe their orientations over time",
		imageUrl: "/lab9.png",
	},
	{
		id:10,
		title: "Heat Conduction in Solids: Experimental and Analytical Investigation of Thermal Diffusivity",
		pdfUrl: "https://drive.google.com/file/d/1qMNLWwAWhZ4ew7Vqykb1imGtGjUvpy8q/view?usp=drive_link",
		description: "This lab analyzes heat conduction in aluminum, brass, and steel using experimental data and MATLAB models. We compared steady-state and transient responses, applied Fourier series solutions, and optimized thermal diffusivity values to improve model accuracy. Results highlight the importance of material properties and initial conditions in thermal behavior.",
		imageUrl: "/lab23.jpg",
	},
	{
		id: 4,
		title: "Mortgage Analysis Using Differential Equations",
		pdfUrl:
			"https://drive.google.com/file/d/1JVLXOXqFV_-Fiu4W73ymAC-ZNiFrAmlR/view?usp=sharing",
		description:
			"This lab applied Differential Equations to compare mortgage plans for a $750,000 loan, including a 10-year fixed mortgage at 3%, a 30-year fixed mortgage at 5%, and a variable rate. MATLAB was used to calculate monthly payments, total costs, and to implement Euler’s method for approximating loan amounts over time, with smaller timesteps improving accuracy. The 10-year plan had higher payments but a lower total cost, while the 30-year plan had lower payments and higher costs. Larger monthly payments were shown to reduce total interest, while adjustable rates provided short-term savings at the expense of long-term costs.",
		imageUrl: "/lab4.png",
	},
	{
		id: 5,
		title: "Image Manipulation and Compression",
		pdfUrl:
			"https://drive.google.com/file/d/1tVfQOrHFt-Wj2Bl_uE4Mg9Z_YwfbTl5b/view?usp=drive_link",
		description:
			"This lab explores image manipulation and compression using MATLAB through matrix operations. Key tasks include loading and converting images, adjusting exposure, altering colors, and performing transformations like shifting, flipping, and transposing. The lab also demonstrates image compression using the Discrete Sine Transform (DST), analyzing how different compression ratios affect image quality. Results highlight the relationship between matrix manipulations and storage efficiency. The report includes MATLAB code and explanations for each operation.",
		imageUrl: "/lab5.png",
	}, 
	{
		id: 3,
		title: "Aerospace Computing - Satellite Tracking Using C++",
		pdfUrl:
			"https://drive.google.com/file/d/11_2r9IrR4zb3Kjg10ZCZDbRiC7JVgR90/view?usp=drive_link",
		description: `This project simulates satellite orbits and ground station communication planning by calculating visibility windows over three days. Satellite positions are generated based on Earth's rotation, stored in "CBPosition.csv," and visibility is determined each minute using a masking angle. Results, saved as "Sat1Visibility.csv" and "Sat2Visibility.csv," indicate when satellites are visible (1) or not (0) from the ground station, providing essential data for optimizing coverage and communication schedules.`,
		imageUrl: "/lab3.png",
	},

	// {
	// 	id: 10,
	// 	title:
	// 		"Electronics - Voltage Dividers, Grounding, and Signal Conditioning Analysis",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/1kBvODwrhuVy8ABsYjCYZfHRqbJfOAAd3/view?usp=sharing",
	// 	description:
	// 		"This lab covers experiments on voltage dividers, grounding, equivalent circuits, and accelerometer measurements. Key findings include the impact of grounding on voltage measurements and the importance of proper signal conditioning for accurate accelerometer data. The results highlight the effects of impedance and the need for careful circuit analysis to achieve precise measurements.",
	// 	imageUrl: "/lab10.png",
	// },
	// {
	// 	id: 11,
	// 	title:
	// 		"Electronics - AC/DC Coupling, RC Circuits, and Power Supply Analysis",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/1HDg7Lg4EPGiPzFwo8S6n59vJT5AOuz7S/view?usp=sharing",
	// 	description:
	// 		"This lab investigates AC/DC coupling and RC circuits through precise oscilloscope and multimeter analysis. It examines the impact of coupling on signal integrity, derives and evaluates RC time constants, and analyzes the output waveform of a rectifier under different load conditions. Capacitor values were computed theoretically and validated via experimental measurements, ensuring alignment with expected circuit behavior.",
	// 	imageUrl: "/lab11.png",
	// },
	// {
	// 	id: 12,
	// 	title:
	// 		"Electronics - Frequency Domain and Low-Pass Filter Design for Signal Conditioning With MATLAB",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/1kyR0rs1kNZ0RVn7uS6xV7z4L2NTxeTwu/view?usp=sharing",
	// 	description:
	// 		"In this lab, we explored the frequency content of various signals using both time and frequency domain analysis. Key measurements such as peak-to-peak voltage, RMS voltage, and signal frequency were determined through power spectral density plots and Fourier analysis. We designed and tested a low-pass filter circuit, recording the effects on signal attenuation as frequency increased, confirming theoretical corner frequency behavior. Experimental results showed how signal filtering and spectral analysis can be used to condition signals in practical applications. The lab also involved assessing the filter's roll-off rate, confirming a 20 dB per decade decline past the cutoff frequency.",
	// 	imageUrl: "/lab12.png",
	// },
	// {
	// 	id: 13,
	// 	title:
	// 		"Electronics - Zener Diodes, DC-DC Conversion, Linear Regulation, and Power Switching Using MATLAB",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/16wBSpIKbWWutfrI0dLli_Uu1OEhROWUy/view?usp=sharing",
	// 	description:
	// 		"The experiments focused on evaluating Zener diode behavior under varying input voltages, analyzing a DC-DC converter's performance, assessing the stability of a linear power regulator, and examining transistor-based power switching. Key findings include the identification of a Zener diode breakdown voltage of 5.56 V, DC-DC conversion efficiency affected by load resistance, linear regulator efficiency variations with different resistive loads, and the switching characteristics of MOSFETs. The efficiency of power regulation techniques was quantified, revealing significant differences between linear and DC-DC methods.",
	// 	imageUrl: "/lab13.png",
	// },
	// {
	// 	id: 14,
	// 	title:
	// 		"Electronics - Operational Amplifiers, Vibrating Beam Dynamics, and Accelerometer Signal Conditioning",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/1Tr1g2yq8rb-GL9YMeZYXokxhYZK-zKVd/view?usp=sharing",
	// 	description:
	// 		"The study explored the gain and limitations of inverting, buffer and summing amplifiers. The vibrating beam experiment revealed a frequency-dependent damping effect, with higher frequencies at shorter beam lengths. Accelerometer signal conditioning was implemented to enhance voltage output stability, using an operational amplifier to attenuate and fine-tune the signal for accurate vibration measurements. The results demonstrate practical applications of amplifiers in signal processing and vibration analysis.",
	// 	imageUrl: "/lab14.png",
	// },
	// {
	// 	id: 15,
	// 	title:
	// 		"Electronics - Quantization, Sampling, and Digital Signal Processing Using MATLAB and Arduino Due",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/1fT8IF62jaI4w8QXKr8ogW9Gt4Rlayt7f/view?usp=sharing",
	// 	description:
	// 		"Quantization experiments compared 4-bit, 8-bit, and 12-bit resolutions, revealing visible quantization effects at lower bit levels and higher resolution with increased bit depth. Sampling frequency tests demonstrated aliasing at certain frequencies, emphasizing the importance of adhering to the Nyquist criterion. Computational speed analysis compared an Arduino Due and MATLAB, highlighting significant performance differences due to processor speed and algorithm complexity, with MATLAB completing tasks much faster. The results underscore the practical challenges and considerations in digital signal processing applications.",
	// 	imageUrl: "/lab15.png",
	// },
	// {
	// 	id: 16,
	// 	title:
	// 		"Electronics - Serial Port and Arduino ADC Communication Interfaces for Digital Signal Processing Using MATLAB",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/1yg4i8lk3hg2A600hnHq-OEpPRduZ2oMx/view?usp=drive_link",
	// 	description:
	// 		"Investigated serial communication protocols and Arduino analog-to-digital (ADC) conversions. Different parity configurations and baud rates were assessed for their effects on signal transmission. Notable findings include variations in character representation based on parity settings and the influence of baud rate on transmission speed. The Arduino ADC's response to voltage inputs was evaluated, revealing insights into effective voltage resolution and sampling rates. MATLAB integration indicated a maximum effective sampling frequency of 80 Hz, with aliasing observed at lower frequencies due to communication lag.",
	// 	imageUrl: "/lab16.png",
	// },
	// {
	// 	id: 17,
	// 	title:
	// 		"Electronics - Combinatorial and Sequential Logic Circuits with Frequency Measurement Techniques Using Multisim",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/14v_853S1OTU4b9NBC--x6-Iy1bvNz53z/view?usp=sharing",
	// 	description:
	// 		"Examined logic circuits through simulations and practical tests using Multisim, Arduino Due, and BASYS 3 FPGA. It covers combinatorial gates (e.g., OR, AND, XOR) and synchronous vs. asynchronous counters. The BASYS 3 outperforms the Arduino Due in high-frequency measurements due to better processing and higher clock speeds.",
	// 	imageUrl: "/lab17.png",
	// },
	// {
	// 	id: 18,
	// 	title:
	// 		"Electronics - Frequency Modulation and Filtering in Signal Processing Using MATLAB",
	// 	pdfUrl:
	// 		"https://drive.google.com/file/d/1R_mLG752Gk1hfgZgPKUl_MvbnPUJJjpq/view?usp=sharing",
	// 	description:
	// 		"This report examines signal processing techniques, including mixers, filters, and modulation. Mixers demonstrated harmonic generation and frequency translation, while filters effectively isolated desired frequencies. AM showed sensitivity to noise, whereas FM proved more robust, maintaining signal integrity. MATLAB simulations highlighted FM's noise resistance, reinforcing its advantages for modern communication systems.",
	// 	imageUrl: "/lab18.png",
	// },
	{
		id: 19,
		title:
			"Experimental and Computational Analysis of Specific Heat in Calorimeter Systems for Material Identification using MATLAB",
		pdfUrl:
			"https://drive.google.com/file/d/11Lnh24OMjcf2ejmh--t7Vl7JPa0j_5Zh/view?usp=sharing",
		description:
			"This project focused on calculating the specific heat of a given calorimeter and its associated error to identify the material within an assigned sample. The process involved using experimental temperature data and MATLAB for least squares estimation to compare results against known material values. Key assumptions included a constant initial room temperature and an adiabatic system to minimize heat loss. Various error derivations and alternative calculation approaches were considered, emphasizing thorough methodology in determining precise measurements for material identification.",
		imageUrl: "/lab19.png",
	}
];

const Labs: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full pb-14">
			<h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">
				Lab Reports
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
				{labReports.map((report) => (
					<div
						key={report.id}
						className="relative flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 group"
					>
						<a
							href={report.pdfUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center justify-center cursor-pointer"
						>
							<div className="w-72 h-96 mb-4 flex items-center justify-center rounded overflow-hidden">
								<img
									src={report.imageUrl}
									alt={`Thumbnail for ${report.title}`}
									className="w-full h-full object-cover"
								/>
							</div>
							<span className="text-center text-white">{report.title}</span>
						</a>
						{/* Tooltip Popup */}
						<div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-[95%] bg-black bg-opacity-90 text-white text-sm md:text-base p-2 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
							<p className="whitespace-pre-wrap break-words text-center">
								{report.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Labs;
