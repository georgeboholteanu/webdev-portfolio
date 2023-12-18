"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { IoDownloadOutline } from "react-icons/io5";

function Hero() {
	return (
		<section className="py-24 xl:py-36 h-[84vh] xl:pt-48 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
			<div className="container mx-auto">
				<div className="flex justify-between gap-x-10">
					{/* description */}
					<div>
						<div className="pb-4">
							<div className="text-sm uppercase font-semibold pb-5 tracking-[4px]">Web Developer</div>
							<h1 className="text-5xl">
								Hello, my name is{" "}
								<span className="text-5xl text-cyan-600">
									George
								</span>
							</h1>
						</div>
						<p className="text-sm font-light pb-10 tracking-[4px]">
							{" "}
							With an interrest in challenging myself in creating new things, I like to takle life with a proactive atitude, learn from mistakes while staying curious of everything new.
						</p>

						{/* buttons */}
						<div className="flex gap-5 sm:gap-10">
							<div className="flex items-center gap-2 rounded-3xl bg-slate-500 px-6 py-3">
								<Link
									href="mailto:george.boholteanu@gmail.com"
									className="flex gap-2 items-center"
								>
									<span className="text-white text-sm">
										Get in touch
									</span>
									<IoIosSend className="text-yellow-300" />
								</Link>
							</div>
							<div className="rounded-3xl bg-slate-400 px-6 py-3">
								<Link
									href="/assets/gb-resume.pdf"
									className="flex gap-2 items-center"
								>
									<span className="text-white text-sm">
										Download CV
									</span>
									<IoDownloadOutline className="text-yellow-300" />
								</Link>
							</div>
						</div>
					</div>
					{/* hero image */}
					<div id="hero-image">
						<div>
							<Image
								className="rounded-full mx-5"
								src="/GB_square.jpg"
								alt="GB"
								width={300}
								height={300}
							></Image>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
