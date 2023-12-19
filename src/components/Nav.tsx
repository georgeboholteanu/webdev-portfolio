import { useState } from "react";
import Link from "next/link";

//next hooks
import { usePathname } from "next/navigation";

//framer motion
import { motion } from "framer-motion";

const links = [
	{ path: "/", name: "home" },
	{ path: "/about", name: "about" },
	{ path: "/projects", name: "projects" },
	{ path: "/contact", name: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
	const path = usePathname();

	return (
		<nav className={`${containerStyles}`}>
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`capitalize ${linkStyles} hover:text-primary `}
					>
						{link.path === path && (
							<motion.span
								initial={{ y: "-100%" }}
								animate={{ y: 0 }}
								transition={{ type: "tween" }}
								layoutId="underline"
								className={`${underlineStyles}`}
							/>
						)}
						{link.name}
					</Link>
				);
			})}
		</nav>
		// <div
		// 	className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
		// 		navbar ? "p-12 md:p-0 block" : "hidden"
		// 	}`}
		// >
		// 	<ul className="h-screen md:h-auto items-center justify-center md:flex bg-slate-300 md:bg-transparent">
		// 		<li className="text-gray-200 font-sans pb-3 text-xl py-2 px-6 text-center hover:underline md:hover:text-yellow-300 md:hover:bg-transparent">
		// 			<Link href="/Home" onClick={() => setNavbar(!navbar)}>
		// 				Home
		// 			</Link>
		// 		</li>
		// 		<li className="text-gray-200 font-sans pb-3 text-xl py-2 px-6 text-center hover:underline md:hover:text-yellow-300 md:hover:bg-transparent">
		// 			<Link href="/about" onClick={() => setNavbar(!navbar)}>
		// 				About
		// 			</Link>
		// 		</li>
		// 		<li className="text-gray-200 font-sans pb-3 text-xl py-2 px-6 text-center hover:underline md:hover:text-yellow-300 md:hover:bg-transparent">
		// 			<Link href="/projects" onClick={() => setNavbar(!navbar)}>
		// 				Projects
		// 			</Link>
		// 		</li>
		// 		<li className="text-gray-200 font-sans pb-3 text-xl py-2 px-6 text-center hover:underline md:hover:text-yellow-300 md:hover:bg-transparent">
		// 			<Link
		// 				className="pr-20"
		// 				href="/contact"
		// 				onClick={() => setNavbar(!navbar)}
		// 			>
		// 				Contact
		// 			</Link>
		// 		</li>
		// 	</ul>
		// </div>
	);
};

export default Nav;
