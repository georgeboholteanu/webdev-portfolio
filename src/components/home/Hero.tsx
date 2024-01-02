"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";
import { DownloadIcon } from "@radix-ui/react-icons";

// components
import Socials from "../Socials";
import DevImg from "./DevImg";

function Hero() {
	return (
		<section className="md:py-36 h-[84vh] xl:pt-48 bg-slate-200 dark:bg-transparent bg-cover bg-no-repeat bg-bottom dark:bg-none">
			<div className="container mx-auto justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-x-10 gap-y-10">
					{/* hero description */}
					<div className="flex max-w-[500px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
						<div className="pb-4">
							<div className="text-sm uppercase font-semibold pb-5 tracking-[4px] text-cyan-600">
								Web Developer
							</div>
							<h1 className="text-5xl">
								Hello, my name is{" "}
								<span className="text-cyan-600">George</span>
							</h1>
						</div>			

						<p className="text-sm font-light italic pb-10 text-muted-foreground tracking-[1px] max-w-[500px]">
							{" "}
							I embrace life{" "}
							<span className="text-yellow-400">proactively</span>
							,{" "}
							<span className="text-yellow-400">
								learning from mistakes
							</span>{" "}
							and staying{" "}
							<span className="text-yellow-400">curious</span>{" "}
							about everything new. Committed to constant growth,
							I approach challenges with resilience and a solid{" "}
							<span className="text-yellow-400">commitment</span>{" "}
							to becoming a better version of myself.
						</p>
						{/* buttons */}
						<div className="flex flex-col gap-y-3 gap-x-5 md:flex-row mx-auto xl:mx-0 mb-16">
							<Link href="mailto:george.boholteanu@gmail.com">
								<Button className="gap-x-2 items-center">
									Get in touch
									<SendIcon
										size={18}
										className="text-blue-400"
									/>
								</Button>
							</Link>
							<Link href="/assets/gb-resume.pdf">
								<Button
									variant="secondary"
									className="gap-x-2 items-center"
								>
									Download CV
									<DownloadIcon className="text-blue-400" />
								</Button>
							</Link>
						</div>
						{/* socials */}
						<Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 hidden sm:flex" />
					</div>
					{/* hero image */}
					<div className="hidden relative md:flex">
						<div className="bg-hero_shape_light dark:bg-hero_shape_dark w-[480px] h-[480x] sm:scale-75 lg:scale-100 bg-no-repeat absolute -top-1 -right-0">
							<DevImg
								containerStyles="bg-hero_shape w-[476px] h-[476px] bg-no-repeat bg-bottom relative"
								imgSrc="/hero/gb_cutout2.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
