import {
	FaHtml5,
	FaCss3Alt,
	FaReact,
	FaGit,
	FaPython,
	FaFigma,
} from "react-icons/fa";
import {
	SiAdobephotoshop,
	SiAdobeindesign,
	SiAdobeillustrator,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import TailwindIcon from "@/components/TailwindIcon";

const iconsFrameworks = [
	{ name: <IoLogoJavascript /> },
	{ name: <FaPython /> },
	{ name: <FaHtml5 /> },
	{ name: <FaReact /> },
	{ name: <FaCss3Alt /> },
	{
		name: (
			<i className="border border-black dark:border-white rounded-md text-gray-800 dark:text-white justify-center items-center">
				<TailwindIcon className="w-[1.3rem] md:w-[1.4rem] lg:w-[1.8rem]" />
			</i>
		),
	},
];
const iconsTools = [
	{ name: <FaFigma /> },
	{ name: <SiAdobephotoshop /> },
	{ name: <SiAdobeindesign /> },
	{ name: <SiAdobeillustrator /> },
];

const ExperienceHeader = () => {
	
	return (
		<div className="mb-10 flex flex-col gap-4 justify-between ">
			{/* frameworks */}
			<div className="flex items-center">
				<h4 className="text-sm md:text-xl uppercase w-[160px] sm:w-[200px] text-yellow-500 ">Frameworks</h4>
				<div className="flex gap-x-2 text-md md:text-lg lg:text-2xl xl:text-3xl items-center pl-4">
					{iconsFrameworks.map((icon, index) => (
						<i
							className="flex flex-1 text-gray-800 dark:text-white"
							key={index}
						>
							{icon.name}
						</i>
					))}
				</div>
			</div>
			{/* version control */}
			<div className="flex items-center">
				<h4 className="text-sm md:text-xl uppercase w-[160px] sm:w-[200px] text-yellow-500 ">
					Version Control
				</h4>
				<i className="pl-4">
					<FaGit className="text-md md:text-lg lg:text-2xl xl:text-3xl" />
				</i>
			</div>
			{/* tools */}
			<div className="flex items-center">
				<h4 className="text-sm md:text-xl uppercase w-[160px] sm:w-[200px] text-yellow-500">Tools</h4>
				<div className="flex gap-x-2 text-md md:text-lg lg:text-2xl xl:text-3xl items-center pl-3">
					{iconsTools.map((icon, index) => (
						<i
							className="flex flex-1 text-gray-800 dark:text-white"
							key={index}
						>
							{icon.name}
						</i>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceHeader;
