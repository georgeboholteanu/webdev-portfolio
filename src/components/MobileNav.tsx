import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

// components
import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<AlignJustify className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent>
				<div>
					<div className="">
						<Logo />
						<Nav
							containerStyles="flex flex-col items-center gap-y-6 pt-20 pb-80"
							linkStyles="text-2xl"
							underlineStyles=""
						/>
						<Socials containerStyles="flex justify-center gap-x-4" />
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
