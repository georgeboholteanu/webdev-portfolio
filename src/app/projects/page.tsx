"use client";
import { useState, useEffect } from "react";

// import swiper
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";
import PageWrapper from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";

const projectData = [
	{
		image: "/projects/dreamquestapp.jpg",
		name: "DreamQuest",
		category: ["figma", "wordpress", "seo", "search console"],
		description: "Web app for architectural visualization company",
		link: "https://dreamquestviz.com/",
		github: "/",
		type: ["dev", "all"],
	},
	{
		image: "/projects/fitnestapp.jpg",
		name: "Fitnest Club",
		category: ["react", "tailwind", "sequalize", "mysql", "express"],
		description:
			"Full stack development app; user can register and login to access the Dashboard",
		link: "https://fitnest.vercel.app/",
		github: "https://github.com/georgeboholteanu/FITNEST-APP",
		type: ["dev", "all"],
	},
	{
		image: "/projects/freelancerapp.png",
		name: "Freelancer Booking",
		category: ["react", "node", "tailwind", "express"],
		description:
			"Users can easily browse and filter through a diverse range of freelancers by location, skills and work type",
		link: "https://freelancer-booking-app.onrender.com/",
		github: "https://github.com/georgeboholteanu/Freelance-Booking-App",
		type: ["dev", "all"],
	},
	{
		image: "/projects/sam_original.jpg",
		name: "Smart Asset Manager",
		category: ["python", "inno-setup", "web scraping", "tkinter"],
		description:
			"Standalone app embedded into an installer; used for batch downloading data from a specific platform and to organize it",
		link: "https://github.com/georgeboholteanu/SmartAssetsManager",
		github: "https://github.com/georgeboholteanu/SmartAssetsManager",
		type: ["dev", "all"],
	},
	{
		image: "/projects/triviaapp.png",
		name: "Trivia Quizz",
		category: ["react", "node", "tailwind", "express"],
		description: "Interractive quizz app using Trivia and GIPHY APIs ",
		link: "https://andzej-s.github.io/trivia-quiz-game/",
		github: "https://github.com/georgeboholteanu/TRIVIA-APP",
		type: ["dev", "all"],
	},
	{
		image: "/projects/image001.webp",
		name: "Belgrove House",
		category: ["Photoshop", "3DS Max", "Vray", "AXYZ"],
		description:
			"Offices and laboratory building oposite to Kings Cross, London",
		link: "/projects/image001.webp",
		github: "/",
		type: ["vis", "all"],
	},
	{
		image: "/projects/image002.webp",
		name: "Bedfont Lakes",
		category: ["Photoshop", "3DS Max", "Vray", "ForestPro"],
		description: "Offices refurbishment next to Heathrow Airport",
		link: "/projects/image002.webp",
		github: "/",
		type: ["vis", "all"],
	},
	{
		image: "/projects/image005.webp",
		name: "Oseo Paseo",
		category: ["Photoshop", "3DS Max", "Vray", "IvyGenerator"],
		description: "Exquisite restaurant located Oklahoma USA",
		link: "/projects/image005.webp",
		github: "/",
		type: ["vis", "all"],
	},
	{
		image: "/projects/image006.webp",
		name: "Qindao Apartment",
		category: ["Photoshop", "3DS Max", "Vray"],
		description: "Bedroom interior in Qingdao Residential Tower",
		link: "/projects/image006.webp",
		github: "/",
		type: ["vis", "all"],
	},
	{
		image: "/projects/image007.webp",
		name: "Piccadilly Club",
		category: ["Photoshop", "3DS Max", "Vray"],
		description: "Top level Club Room next to Piccadilly Circus, London",
		link: "/projects/image007.webp",
		github: "/",
		type: ["vis", "all"],
	},
	{
		image: "/projects/image004.webp",
		name: "Lansdowne House",
		category: ["Photoshop", "3DS Max", "Vray", "ForestPro"],
		description:
			"Typical floor Interior CGI looking to Berkley Square, London",
		link: "/projects/image004.webp",
		github: "/",
		type: ["vis", "all"],
	},
];

const Projects = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [filteredProjects, setFilteredProjects] = useState([]);

	const handleCategoryChange = (category: string) => {
		setActiveCategory(category);
	};

	useEffect(() => {
		console.log(activeCategory);

		const projectsToShow =
			activeCategory === "all"
				? projectData
				: projectData.filter((project) =>
						project.type.includes(activeCategory)
				  );

		setFilteredProjects(projectsToShow);

		console.log(filteredProjects);
	}, [filteredProjects, activeCategory]);

	return (
		<PageWrapper>
			<section className="relative mx-4 mb-12 xl:mb-48">
				<div className="container mx-auto">
					{/* text */}
					<h1 className="mb-4 font-bold text-blue-400">projects</h1>
					<p className="subtitle mb-10 sm:mb-16">
						A collection of projects reflecting my overall
						experience
					</p>

					{/* filter buttons */}
					<div className="flex gap-x-2 sm:gap-x-4 mb-10">
						<button onClick={() => handleCategoryChange("all")}>
							<Badge className="w-24 text-md justify-center font-normal">
								All
							</Badge>
						</button>
						<button onClick={() => handleCategoryChange("dev")}>
							<Badge className="text-md justify-center font-normal">
								Development
							</Badge>
						</button>
						<button onClick={() => handleCategoryChange("vis")}>
							<Badge className="text-md justify-center font-normal">
								Visualization
							</Badge>
						</button>
					</div>

					{/* project cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-between">
						{filteredProjects.map((project, index) => {
							return (
								<ProjectCard
									projectImage={project.image}
									projectName={project.name}
									projectCategory={project.category}
									projectDescription={project.description}
									projectType={project.type}
									projectLink={project.link}
									projectGithub={project.github}
									key={index}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</PageWrapper>
	);
};

export default Projects;
