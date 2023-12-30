import Link from "next/link";
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

interface SocialsProps {
	containerStyles: string,	
}

const icons = [
	{
		path: "https://www.linkedin.com/in/george-boholteanu-638957267/",
		name: <RiLinkedinFill />,
	},
	{ path: "https://www.instagram.com/georgeboholteanu/", name: <RiInstagramFill /> },
	{ path: "https://github.com/georgeboholteanu", name: <RiGithubFill /> },
];

const Socials:React.FC<SocialsProps> = ({ containerStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{icons.map((icon, index) => {
				return (
					<Link href={icon.path} key={index}>
						<div className="hover:text-primary text-2xl hover:scale-[1.3] transition-all">{icon.name}</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
