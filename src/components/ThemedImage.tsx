import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const imageMappings = {
	profiletree: {
		dark: "/about/profiletree.svg",
		light: "/about/profiletree.svg",
	},
	ahmm: {
		dark: "/about/ahmm_dark.png",
		light: "/about/ahmm_light.png",
	},
	foster: {
		dark: "/about/foster_and_partners.svg",
		light: "/about/foster_and_partners.svg",
	},
	dreamquest: {
		dark: "/about/dreamquest_dark.png",
		light: "/about/dreamquest_light.png",
	},
	edx: {
		dark: "/about/edx_logo.svg",
		light: "/about/edx_logo.svg",
	},
	personalDev: {
		dark: "/about/illustration_personal_dev_cutout.png",
		light: "/about/illustration_personal_dev_cutout.png",
	},
	artist: {
		dark: "/about/illustration_artist_cutout.png",
		light: "/about/illustration_artist_cutout.png",
	},
} as const;

interface ThemedImageProps {
	imageName: keyof typeof imageMappings;
	imageAlt: string;
	imageStyles: string;
	imageWidth: number;
	imageHeight: number;
}

const ThemedImage: React.FC<ThemedImageProps> = ({
	imageName,
	imageAlt,
	imageStyles,
	imageWidth,
	imageHeight,
}) => {
	const { resolvedTheme } = useTheme();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Check if resolvedTheme is available
		if (resolvedTheme !== undefined) {
			setIsLoading(false);
		}
	}, [resolvedTheme]);

	if (isLoading) {
		// Return loading state or fallback UI
		return <p>Loading...</p>;
	}

	// Ensure the image name exists in the mappings
	if (!imageMappings[imageName]) {
		console.error(`Image name "${imageName}" not found in mappings.`);
		return null; 
	}

	// Ensure the resolved theme is valid
	if (
		resolvedTheme !== undefined &&
		!imageMappings[imageName][resolvedTheme]
	) {
		console.error(
			`Image source not found for theme "${resolvedTheme}" and image "${imageName}".`
		);
		return null; 
	}

	const imageSrc =
		resolvedTheme !== undefined
			? imageMappings[imageName][resolvedTheme]
			: undefined;

	if (!imageSrc) {
		console.error(
			`Image source not found for theme "${resolvedTheme}" and image "${imageName}".`
		);
		return null; 
	}

	return (
		<Image
			src={imageSrc}
			alt={imageAlt}
			className={imageStyles}
			width={imageWidth}
			height={imageHeight}
			priority
					
		/>
	);
};

export default ThemedImage;
