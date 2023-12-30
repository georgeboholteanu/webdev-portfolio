import Image from "next/image";

interface DevImgProps {
	containerStyles: string;
	imgSrc: string;
  }

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
	return (
		<div className={`${containerStyles}`}>
			<Image src={imgSrc} alt="GB" fill priority></Image>
		</div>
	);
};

export default DevImg;
