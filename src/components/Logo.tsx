import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<Link href="/" className="hover:scale-[1.1] transition-all">
			<Image
				src="/gb_logo.png"
				alt="Logo"
				width={50}
				height={50}
				priority
			/>
		</Link>
	);
};

export default Logo;
