import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "../ui/card";
import { Github, Link2Icon, Star } from "lucide-react";
import { Badge, badgeVariants } from "../ui/badge";
import { useTheme } from "next-themes";
import { useEffect } from "react";

interface ProjectCardProps {
	projectImage: string;
	projectName: string;
	projectCategory: string[];
	projectDescription: string;
	projectType: string[];
	projectLink: string;
	projectGithub: string;
	projectExtras?: {
		featured: boolean;
		year: string;
		technology: string;
	};
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	projectImage,
	projectName,
	projectCategory,
	projectDescription,
	projectType,
	projectLink,
	projectGithub,
	projectExtras,
}) => {
	const { theme, setTheme } = useTheme();
	useEffect(() => {}, [theme]);

	return (
		<Card className=" bg-gray-200 dark:bg-transparent group">
			<CardHeader className="p-0 border-b-zinc-600 border-[1px] ">
				{/* image */}
				<div className="relative w-full h-[200px] flex items-center justify-center bg-secondary dark:bg-gray-200/40 rounded-t-md overflow-hidden">
					<Image
						className="absolute bottom-0 shadow-2xl"
						src={projectImage}
						alt=""
						sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
					{/* btn links */}
					<div className="justify-center items-center flex gap-x-6">
						{projectLink && (
							<Link
								href={projectLink}
								className="bg-secondary/70 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 relative rounded-full"
							>
								<Link2Icon className="w-[50px] h-[50px] hover:text-blue-500 p-2" />
							</Link>
						)}
						{projectGithub &&
							projectType &&
							projectType.includes("dev") && (
								<Link
									href={projectGithub}
									className="bg-secondary/70 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 relative rounded-full"
								>
									<Github className="w-[50px] h-[50px] hover:text-blue-500 p-2" />
								</Link>
							)}
					</div>
				</div>
			</CardHeader>
			<div className="h-full px-4 py-3 text-center">
				<div className="h-52">
					<h4 className="my-2 text-2xl ">{projectName}</h4>
					<p className="text-muted-foreground text-sm px-6 py-2">
						{projectDescription}
					</p>
					{projectCategory.map((category, index) => (
						<Badge
							key={index}
							className={`${badgeVariants({
								variant: "default",
							})} uppercase text-xs my-2 mx-1`}
						>
							{category}
						</Badge>
					))}
				</div>
				{projectExtras && (
					<div
						className={`{${theme} === "dark" ? text-white: text-black} ${
							projectExtras.featured
								? "justify-between"
								: "justify-center"
						} text-xs font-semibold rounded-md bg-gradient-to-r from from-purple-400/30 to-blue-400/30  items-center flex my-2 p-2`}
					>
						{projectExtras.featured && (
							<Star fill="#73BBF7" strokeWidth={0} />
						)}
						<span className="h-6 flex items-center">{projectExtras.technology}</span>
						{projectExtras.featured && (
							<Star fill="#73BBF7" strokeWidth={0} />
						)}
					</div>
				)}
			</div>
		</Card>
	);
};

export default ProjectCard;
