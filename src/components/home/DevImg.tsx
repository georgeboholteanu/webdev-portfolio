import Image from "next/image";

interface DevImgProps {
	containerStyles: string;
	imgSrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
	return (
		<div className={`${containerStyles}`}>
			<Image
				src={imgSrc}
				alt="GB"
				fill
				priority
				sizes="(max-width: 768px) 100vw, 33vw"
				quality={100}
			></Image>
		</div>
	);
};

export default DevImg;
