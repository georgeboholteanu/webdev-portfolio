import Link from "next/link";
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

interface SocialsProps {
	containerStyles: string;
}

const icons = [
	{
		path: "https://www.linkedin.com/in/george-boholteanu-638957267/",
		name: <RiLinkedinFill />,
		icon_color: "text-cyan-500",
	},
	{
		path: "https://www.instagram.com/georgeboholteanu/",
		name: <RiInstagramFill />,
		icon_color: "text-pink-500/90",
	},
	{
		path: "https://github.com/georgeboholteanu",
		name: <RiGithubFill />,
		icon_color: "text-gray-500",
	},
];

const Socials: React.FC<SocialsProps> = ({ containerStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link href={icon.path} key={index}>
						<div className={`hover:text-primary text-2xl hover:scale-[1.3] transition-all ${icon.icon_color}`}>
							{icon.name}
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
