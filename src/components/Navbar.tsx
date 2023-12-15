"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
	const [navbar, setNavbar] = useState(false);

	return (
		<div>
			<nav className="w-full fixed top-0 left-0 right-0 z-10">
				<div className="px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
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
									className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<Image
											width="30"
											height="30"
											alt="logo"
											src="/close-bold-svgrepo-com.svg"
										/>
									) : (
										<Image
											width="30"
											height="30"
											alt="logo"
											src="/hamburger-svgrepo-com.svg"
										/>
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
							<ul className="h-screen md:h-auto items-center justify-center md:flex ">
								<li className="pb-3 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
									<Link
										href="/about"
										onClick={() => setNavbar(!navbar)}
									>
										About
									</Link>
								</li>
								<li className="pb-3 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
									<Link
										href="/experience"
										onClick={() => setNavbar(!navbar)}
									>
										Experience
									</Link>
								</li>
								<li className="pb-3 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
									<Link
										href="/projects"
										onClick={() => setNavbar(!navbar)}
									>
										Projects
									</Link>
								</li>
								<li className="pb-3 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
									<Link
										href="/contacts"
										onClick={() => setNavbar(!navbar)}
									>
										Contacts
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
