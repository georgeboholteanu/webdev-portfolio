"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import MobileNav from "./MobileNav";
import Socials from "./Socials";

function Header() {
	const pathname = usePathname();
	const [header, setHeader] = useState(false);

	useEffect(() => {
		const scrollYPos = window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		});

		// remove event
		return () => window.removeEventListener("scroll", scrollYPos);
	});

	return (
		<header
			className={`${
				header
					? "py-4 bg-white shadow-lg dark:bg-accent"
					: "py-6 dark:bg-transparent"
			} sticky top-0 z-30 transition-all ${
				pathname === "/" && "bg-[#8b8a89]"
			}`}
		>
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<Logo />
					<div className="flex items-center">
						{/* nav */}
						<Nav
							containerStyles="hidden lg:flex gap-x-10 items-center px-20"
							linkStyles="relative hover:text-primary transition-all"
							underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
						/>
						{/* mobile nav */}
						<div className="xl:hidden">
							<MobileNav />
						</div>
					</div>
				</div>
			</div>
			<div className="fixed bottom-10 left-10">
				<ThemeToggler />
			</div>
		</header>
	);
}

export default Header;
