"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggler from "./ThemeToggler";

function Navbar() {
	const [navbar, setNavbar] = useState(false);

	return (
		<header>
			<nav className="w-full fixed top-0 left-0 right-0 z-10">
				<div className="px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 justify-center">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							{/* LOGO */}
							<Link href="/">
								<Image
									src="/gb_logo.png"
									alt="Logo"
									width={50}
									height={50}
								/>
							</Link>

							{/* HAMBURGER BUTTON FOR MOBILE */}
							<div className="md:hidden">
								<button
									className="p-2 text-2xl"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<MdOutlineClose />
									) : (
										<GiHamburgerMenu />
									)}
								</button>
							</div>
						</div>
					</div>

					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? "p-12 md:p-0 block" : "hidden"
							}`}
						>
							<ul className="h-screen md:h-auto items-center justify-center md:flex bg-slate-300 md:bg-transparent">
								<li className="text-gray-200 font-sans pb-3 text-xl py-2 px-6 text-center hover:underline md:hover:text-yellow-300 md:hover:bg-transparent">
									<Link
										href="/Home"
										onClick={() => setNavbar(!navbar)}
									>
										Home
									</Link>
								</li>
								<li className="text-gray-200 font-sans pb-3 text-xl py-2 px-6 text-center hover:underline md:hover:text-yellow-300 md:hover:bg-transparent">
									<Link
										href="/about"
										onClick={() => setNavbar(!navbar)}
									>
										About
									</Link>
								</li>
								<li className="text-gray-200 font-sans pb-3 text-xl py-2 px-6 text-center hover:underline md:hover:text-yellow-300 md:hover:bg-transparent">
									<Link
										href="/projects"
										onClick={() => setNavbar(!navbar)}
									>
										Projects
									</Link>
								</li>
								<li className="text-gray-200 font-sans pb-3 text-xl py-2 px-6 text-center hover:underline md:hover:text-yellow-300 md:hover:bg-transparent">
									<Link
										className="pr-20"
										href="/contact"
										onClick={() => setNavbar(!navbar)}
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="fixed bottom-10 left-10">
						<ThemeToggler />
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
