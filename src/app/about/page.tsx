"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
// components
import ExperienceHeader from "@/components/about/ExperienceHeader";
import PageWrapper from "@/components/PageWrapper";

const About = () => {
	const [isHoveredE1, setIsHoveredE1] = useState(false);
	const [isHoveredE2, setIsHoveredE2] = useState(false);
	const [isHoveredE3, setIsHoveredE3] = useState(false);
	const [isHoveredE4, setIsHoveredE4] = useState(false);
	const [isHoveredE5, setIsHoveredE5] = useState(false);
	const [isHoveredE6, setIsHoveredE6] = useState(false);

	const { theme, setTheme } = useTheme();

	return (
		<PageWrapper>
			<div className="container mx-auto pb-10 sm:pt-10">
				{/* hero */}
				<div className="relative pb-20 flex flex-col sm:flex-row gap-10 justify-between">
					<div className="">
						<Image
							src="/about/london_poster.png"
							alt=""
							width={600}
							height={9}
							className="rounded-xl"
						></Image>
					</div>
					<div className="justify-center">
						<h1 className="font-bold pb-4">about me</h1>
						<p className=" tracking-widest text-black  dark:text-white text-sm max-w-xl">
							I am a software developer based in{" "}
							<span className="text-yellow-500 font-bold">
								London
							</span>{" "}
							with a curios mind in learning about new
							technologies and{" "}
							<span className="">self development</span>. <br />
							Drawing from my background in{" "}
							<span className="text-yellow-500 font-bold">
								Architecture
							</span>{" "}
							and{" "}
							<span className="text-yellow-500 font-bold">
								Visualization
							</span>
							, where I focused on delivering exceptional user
							experiences through ultra-realistic graphics or{" "}
							<span className="">CGIs</span>, I am excited to
							enhance my{" "}
							<span className="text-yellow-500 font-bold">
								software development
							</span>{" "}
							knowledge to create well-rounded, user-centric
							applications.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					{/* education*/}
					<div className=" mb-10">
						<div className="pb-10 ">
							<h2 className="bg-gradient-to-r from-blue-400/90 to-transparent rounded-lg">
								.education
							</h2>
						</div>

						<div>
							<div className="flex flex-col gap-4">
								<div className="flex">
									<div className="flex flex-col">
										<a href="https://skillsbootcamp.credential.getsmarter.com/c21c99b3-10a6-417e-802e-54436f3af2d6"></a>
										<h5 className="text-yellow-400 hover:scale-110 transition-all w-[120px] sm:w-[250px]">
											EDX Bootcamp
										</h5>

										<span className="text-sm">
											Mar 2023
										</span>
									</div>
									<p className="text-sm font-sans">
										Front-End Web Development
									</p>
								</div>
								<div className="flex">
									<div className="flex flex-col">
										<h5 className="text-yellow-400 hover:scale-110 transition-all w-[120px] sm:w-[250px]">
											<a href="https://www.sololearn.com/en/certificates/CT-YQGGZDYQ">
												SOLOLEARN
											</a>
										</h5>
										<span className="text-sm">
											Dec 2021
										</span>
									</div>
									<p className="text-sm font-sans">
										Python Intermediate Certificate
									</p>
								</div>
								<div className="flex">
									<div className="flex flex-col">
										<h5 className="text-yellow-400 hover:scale-110 transition-all w-[120px] sm:w-[250px]">
											<a href="https://www.sololearn.com/en/certificates/CT-YQGGZDYQ">
												SOLOLEARN
											</a>
										</h5>
										<span className="text-sm">
											Dec 2021
										</span>
									</div>
									<p className="text-sm font-sans">
										Python Intermediate Certificate
									</p>
								</div>
								<div className="flex">
									<div className="flex flex-col">
										<h5 className="text-yellow-400 hover:scale-110 transition-all w-[120px] sm:w-[250px]">
											<a href="https://www.sololearn.com/en/certificates/CT-1VRJILRM"></a>
											SOLOLEARN
										</h5>
										<span className="text-sm">
											Nov 2021
										</span>
									</div>
									<p className="text-sm font-sans">
										SQL Certificate
									</p>
								</div>
								<div className="flex">
									<div className="flex flex-col">
										<h5 className="text-yellow-400 hover:scale-110 transition-all w-[120px] sm:w-[250px]">
											<a href="https://www.sololearn.com/en/certificates/CT-1VRJILRM"></a>
											University of Architecture Bucharest
											RO
										</h5>
										<span className="text-sm">
											Jul 2014
										</span>
									</div>
									<div className="flex flex-col gap-4">
										<p className="text-sm font-sans">
											Master in Architectural Design
										</p>
										<p className="text-sm font-sans">
											Bachelor in Architecture
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* technologies */}
					<div className="mb-10">
						<div className="pb-10 ">
							<h2 className="bg-gradient-to-r from-blue-400/90 to-transparent rounded-lg">
								.technologies
							</h2>
						</div>

						<div>
							<ExperienceHeader />
						</div>
					</div>
				</div>

				{/* RESUME */}
				<div className="flex flex-col gap-2">
					<div className="pb-10 ">
						<h2 className="bg-gradient-to-r from-blue-400/90 to-transparent rounded-lg">
							.resume
						</h2>
					</div>
					{/* GRID 1 - Web Developer*/}
					<div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
						{/* Column 1 */}
						<div className="flex flex-col py-4 text-center sm:text-left ">
							<h3 className="text-xl">Web Developer</h3>
							<p className="text-xs text-text-orange-700 dark:text-orange-200/70">
								Sep 2022 - Dec 2023
							</p>
							<div className="justify-center sm:justify-start flex">
								<Link href="https://profiletree.com">
									<Image
										src="/about/profiletree.svg"
										width={120}
										height={20}
										alt=""
										className="pt-5"
									/>
								</Link>
							</div>
						</div>

						{/* Column 3 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>

						{/* Column 4 */}
						<div
							className={`w-full border-dotted border-4 border-gray-200 dark:border-gray-700 rounded-lg col-span-2 ${
								isHoveredE1 ? "bg-cyan-300/50" : ""
							} transition-all overflow-hidden`}
							onMouseEnter={() => setIsHoveredE1(true)}
							onMouseLeave={() => setIsHoveredE1(false)}
						>
							<div className="p-4 ">
								<ul className="flex flex-col gap-2">
									<li className="text-sm font-sans text-black dark:text-white">
										Conducted in-depth competitor analysis
										for a comprehensive career guidance app
										presenting findings to leadership.
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Wireframing landing page using Figma
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Web Designing using Wordpress to create
										landing page and a quizz application
									</li>
								</ul>
							</div>
						</div>

						{/* Column 5 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>
					</div>

					{/* GRID 2 - Front End Developer*/}
					<div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
						{/* Column 1 */}
						<div className="flex flex-col py-4 text-center sm:text-left">
							<h3 className="text-xl">Front End Developer</h3>
							<p className="text-xs text-text-orange-700 dark:text-orange-200/70">
								Nov 2022 - Mar 2023
							</p>
							<div className="justify-center sm:justify-start flex">
								<Link href="https://edx.org">
									<Image
										src="/about/edx_logo.png"
										width={60}
										height={20}
										alt=""
										className="pt-5"
									/>
								</Link>
							</div>
						</div>

						{/* Column 2 */}
						<div
							className={`w-full border-dotted border-4 border-gray-200 dark:border-gray-700 rounded-lg col-span-2 ${
								isHoveredE2 ? "bg-yellow-400/80" : ""
							} transition-all overflow-hidden`}
							onMouseEnter={() => setIsHoveredE2(true)}
							onMouseLeave={() => setIsHoveredE2(false)}
						>
							<div className="m-4">
								<ul className="flex flex-col gap-2">
									<li className="text-sm font-sans text-black dark:text-white">
										Developed a series of web applications
										utilizing Agile methodologies
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Proficient in HTML, CSS, Tailwind,
										JavaScript, React and Node.js
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Created a{" "}
										<a
											href="https://github.com/georgeboholteanu/Freelance-Booking-App"
											className="text-blue-400 font-semibold"
										>
											Freelancer Booking App
										</a>
										,{" "}
										<a
											href="https://github.com/georgeboholteanu/TRIVIA-APP"
											className="text-blue-400 font-semibold"
										>
											Trivia App
										</a>{" "}
										using Trivia API and GIPHY API, and a{" "}
										<a
											href="https://github.com/georgeboholteanu/weather-dashboard"
											className="text-blue-400 font-semibold"
										>
											Weather Dashboard{" "}
										</a>
										using Openweather API.
									</li>
								</ul>
							</div>
						</div>

						{/* Column 3 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>

						{/* Column 4 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>
					</div>

					{/* GRID 3 - Software Developer*/}
					<div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
						{/* Column 1 */}
						<div className="flex flex-col py-4 text-center sm:text-left">
							<h3 className="text-xl">Software Developer</h3>
							<p className="text-xs text-text-orange-700 dark:text-orange-200/70">
								Mar 2020 - Present
							</p>
							<div className="justify-center sm:justify-start flex">
								<Image
									src="/about/illustration_personal_dev_cutout.png"
									width={80}
									height={20}
									alt=""
									className="pt-5"
								/>
							</div>
						</div>
						{/* Column 2 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>

						{/* Column 3 */}
						<div
							className={`w-full border-dotted border-4 border-gray-200 dark:border-gray-700 rounded-lg col-span-2 ${
								isHoveredE3 ? "bg-purple-500/90" : ""
							} transition-all overflow-hidden`}
							onMouseEnter={() => setIsHoveredE3(true)}
							onMouseLeave={() => setIsHoveredE3(false)}
						>
							<div className="m-4">
								<ul className="flex flex-col gap-2">
									<li className="text-sm font-sans text-black dark:text-white">
										Created a{" "}
										<a
											href="https://georgeboholteanu.vercel.app/"
											className="text-yellow-400 font-semibold"
										>
											Portfolio Website
										</a>{" "}
										that summarises all my experience using
										NextJS
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Web design for a{" "}
										<a
											href="https://fitnest.vercel.app/"
											className="text-yellow-400 font-semibold"
										>
											Fitness Club
										</a>
										. App using Node-Sequelize Cloud
										Authentication
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Designed and developed a Python-based{" "}
										<a
											href="https://github.com/georgeboholteanu/SmartAssetsManager"
											className="text-yellow-400 font-semibold"
										>
											Smart Assets Manager
										</a>{" "}
										App with UI for data organization and
										web scraping
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Conducted web scraping and{" "}
										<span className="text-yellow-400 font-semibold">
											data wrangling
										</span>{" "}
										for Premier League match results using
										Python
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Animated{" "}
										<a
											href="https://public.flourish.studio/visualisation/10114978/"
											className="text-yellow-400 font-semibold"
										>
											data visualizations
										</a>{" "}
										using Flourish App and developed UI
										tools in 3D Studio Max for automation
									</li>
								</ul>
							</div>
						</div>

						{/* Column 4 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>
					</div>

					{/* GRID 4 - Lead 3D Visualizer*/}
					<div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
						{/* Column 1 */}
						<div className="flex flex-col py-4 text-center sm:text-left">
							<h3 className="text-xl">Lead 3D Visualizer</h3>
							<p className="text-xs text-text-orange-700 dark:text-orange-200/70">
								Feb 2020 - Present
							</p>
							<div className="justify-center sm:justify-start flex">
								<Link href="https://dreamquestviz.com">
									<Image
										src={
											theme === "dark"
												? "/about/dreamquest_white.png"
												: "/about/dreamquest_black.png"
										}
										width={120}
										height={20}
										alt=""
										className="pt-5"
									/>
								</Link>
							</div>
						</div>
						{/* Column 2 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>

						{/* Column 3 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>

						{/* Column 4 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>

						{/* Column 5 */}
						<div
							className={`w-full border-dotted border-4 border-gray-200 dark:border-gray-700 rounded-lg col-span-1 ${
								isHoveredE4 ? "bg-orange-500/80" : ""
							} transition-all overflow-hidden`}
							onMouseEnter={() => setIsHoveredE4(true)}
							onMouseLeave={() => setIsHoveredE4(false)}
						>
							<div className="m-4">
								<ul className="flex flex-col gap-2">
									<li className="text-sm font-sans text-black dark:text-white">
										Produced marketing CGIs for clients like
										HENLEY Real Estates Investments and
										WESTWAY Architects
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Led client meetings, translated their
										vision into design proposals, and
										managed project timelines
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Overseen and managed the entire
										visualization process
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/* GRID 5 - Architectural Visualizer*/}
					<div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
						{/* Column 1 */}
						<div className="flex flex-col py-4 text-center sm:text-left">
							<h3 className="text-xl">
								Architectural Visualizer
							</h3>
							<p className="text-xs text-text-orange-700 dark:text-orange-200/70">
								Apr 2017 - Oct 2023
							</p>
							<div className="justify-center sm:justify-start flex">
								<Link href="https://ahmm.co.uk">
									<Image
										src={
											theme === "dark"
												? "/about/ahmm_light.png"
												: "/about/ahmm_dark.png"
										}
										width={80}
										height={20}
										alt=""
										className="pt-5"
									/>
								</Link>
							</div>
						</div>
						{/* Column 2 */}
						<div
							className={`w-full border-dotted border-4 border-gray-200 dark:border-gray-700 rounded-lg col-span-3 ${
								isHoveredE5 ? "bg-cyan-400/90" : ""
							} transition-all overflow-hidden`}
							onMouseEnter={() => setIsHoveredE5(true)}
							onMouseLeave={() => setIsHoveredE5(false)}
						>
							<div className="m-4">
								<ul className="flex flex-col gap-2">
									<li className="text-sm font-sans text-black dark:text-white">
										Established an efficient{" "}
										<span className="text-yellow-400 font-semibold">
											content management
										</span>{" "}
										system, automating asset processing.
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Introduced a content library for
										streamlined design, alleviating
										repetitive tasks
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Solved recurring visualization issues
										within the R&D team
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Delivered a variety of{" "}
										<span className="text-yellow-400 font-semibold">
											CGIs
										</span>{" "}
										for design decision-making
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Provided mentorship and guidance to
										junior visualizers
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Self-learned different programming
										languages to create{" "}
										<span className="text-yellow-400 font-semibold">
											scripts
										</span>{" "}
										and apps for visualizers that help speed
										up their work and cut out repetitive
										task
									</li>
								</ul>
							</div>
						</div>

						{/* Column 5 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>
					</div>

					{/* GRID 6 - 3D Visualizer*/}
					<div className="grid grid-cols-1 sm:grid-cols-5 gap-1">
						{/* Column 1 */}
						<div className="flex flex-col py-4 text-center sm:text-left">
							<h3 className="text-xl">3D Visualizer</h3>
							<p className="text-xs text-text-orange-700 dark:text-orange-200/70">
								Sept 2014 - Apr 2017
							</p>
							<div className="justify-center sm:justify-start flex">
								<Link href="https://fosterandpartners.com">
									<Image
										src="/about/foster_and_partners.png"
										width={130}
										height={20}
										alt=""
										className="pt-5"
									/>
								</Link>
							</div>
						</div>
						{/* Column 2 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>
						{/* Column 3 */}
						<div className="w-full border border-solid border-gray-200 dark:border-gray-700 rounded-lg hidden sm:flex"></div>

						{/* Column 4 */}
						<div
							className={`w-full border-dotted border-4 border-gray-200 dark:border-gray-700 rounded-lg col-span-2 ${
								isHoveredE6 ? "bg-red-500/80" : ""
							} transition-all overflow-hidden`}
							onMouseEnter={() => setIsHoveredE6(true)}
							onMouseLeave={() => setIsHoveredE6(false)}
						>
							<div className="m-4">
								<ul className="flex flex-col gap-2">
									<li className="text-sm font-sans text-black dark:text-white">
										Collaborated with senior visualizers to
										produce outstanding CGIs for clients
										worldwide on high-profile projects
										including high rise towers, Apple
										Stores, Mexico Airport, Cheval Blanc
										villas.
									</li>
									<li className="text-sm font-sans text-black dark:text-white">
										Participated in a wide range of
										competitions from exclusive private
										housing to high-rise buildings,
										mixed-use developments and masterplans.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default About;
