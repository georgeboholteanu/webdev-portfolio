import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
	projectImage: string,
	projectName: string,
	projectCategory: string[],
	projectDescription: string,
	projectType: string,
	projectLink: string,
	projectGithub: string,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	projectImage,
	projectName,
	projectCategory,
	projectDescription,
	projectType,
	projectLink,
	projectGithub,
}) => {
	return (
		<Card className=" bg-gray-200 dark:bg-transparent group">
			<CardHeader className="p-0">
				{/* image */}
				<div className="relative w-full h-[200px] flex items-center justify-center bg-secondary dark:bg-gray-200/40 rounded-t-md overflow-hidden">
					<Image
						className="absolute bottom-0 shadow-2xl"
						src={projectImage}
						alt=""
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
			<div className="h-full px-4 py-6 text-center">
				{projectCategory.map((category, index) => (
					<Badge
						key={index}
						className="uppercase text-sm font-medium mb-2 mx-1"
					>
						{category}
					</Badge>
				))}

				<h4 className="my-2 text-xl">{projectName}</h4>
				<p className="text-muted-foreground text-sm px-6">
					{projectDescription}
				</p>
			</div>
		</Card>
	);
};

export default ProjectCard;
