import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({
	projectImage,
	projectName,
	projectCategory,
	projectDescription,
	projectType,
	projectLink,
	projectGithub,
}) => {
	return (
		<Card className="w-full md:w-1/4 bg-gray-200 dark:bg-transparent">
			<CardHeader className="p-0">
				{/* image */}
				<div className="relative w-full h-[200px] flex items-center justify-center bg-secondary dark:bg-gray-200/40 rounded-t-md overflow-hidden">
					<Image
						className="absolute bottom-0 left-0 right-0 top-0 object-cover inset-0 shadow-2xl"
						src={projectImage}
						alt=""
						fill
						style={{ objectFit: "cover" }}
						priority
					/>
				</div>
				{/* btn links */}
				<div className="justify-center mx-auto container text-center">
					{projectLink && (
						<Link
							href={projectLink}
							className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
						>
							<Link2Icon className="text-white" />
						</Link>
					)}
					{projectGithub && (
						<Link
							href={projectGithub}
							className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-100 opacity-20 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
						>
							<Github className="text-white" />
						</Link>
					)}
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
