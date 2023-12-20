"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// components
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import MobileNav from "./MobileNav";

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
			} sticky top-0 z-30 transition-all border-b-2 border-secondary ${
				pathname === "/contact" && "bg-[#898b8b]"
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
			<div className="fixed bottom-20 left-10 text-4xl">
				<ThemeToggler />
			</div>
		</header>
	);
}

export default Header;
