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
	{ name: <IoLogoJavascript />, key: "javascript" },
	{ name: <FaPython />, key: "python" },
	{ name: <FaHtml5 />, key: "html5" },
	{ name: <FaReact />, key: "react" },
	{ name: <FaCss3Alt />, key: "css" },
	{ name: <TailwindIcon />, key: "tailwind" },
];

const iconsTools = [
	{ name: <FaFigma />, key: "figma" },
	{ name: <SiAdobephotoshop />, key: "photoshop" },
	{ name: <SiAdobeindesign />, key: "indesign" },
	{ name: <SiAdobeillustrator />, key: "illustrator" },
];

const ExperienceHeader = () => {
	return (
		<div className="mb-10 flex flex-col gap-4 justify-between ">
			{/* frameworks */}
			<div className="flex items-center">
				<h4 className="text-sm md:text-xl uppercase w-[160px] sm:w-[200px] text-yellow-500 ">
					Frameworks
				</h4>
				<div className="flex gap-x-2 text-md md:text-lg lg:text-2xl xl:text-3xl items-center pl-4">
					{iconsFrameworks.map((icon) => (
						<i
							className="flex flex-1 text-gray-800 dark:text-white"
							key={icon.key}
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
				<h4 className="text-sm md:text-xl uppercase w-[160px] sm:w-[200px] text-yellow-500">
					Tools
				</h4>
				<div className="flex gap-x-2 text-md md:text-lg lg:text-2xl xl:text-3xl items-center pl-3">
					{iconsTools.map((icon) => (
						<i
							className="flex flex-1 text-gray-800 dark:text-white"
							key={icon.key}
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
