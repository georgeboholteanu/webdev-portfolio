"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { MdOutlineToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";

const ThemeToggler = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="bg-transparent text-4xl hover:bg-transparent text-gray-300"
			variant="outline"
		>
			<MdOutlineToggleOn
				className={`fixed h-[1.2rem] w-[1.2rem] transition-all ${
					theme === "dark" ? "hidden" : "block"
				}`}
			/>
			<MdToggleOff
				className={`h-[1.2rem] w-[1.2rem] transition-all ${
					theme === "dark" ? "block" : "hidden"
				} absolute`}
			/>
		</Button>
	);
};

export default ThemeToggler;
