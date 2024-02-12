import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

type ThemedImageProps = {
  imageName: keyof typeof imageMappings;
  imageAlt: string;
  imageStyles: string;
  imageWidth: number;
  imageHeight: number;
};

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

const ThemedImage: React.FC<ThemedImageProps> = ({
  imageName,
  imageAlt,
  imageStyles,
  imageWidth,
  imageHeight,
}) => {
  const { resolvedTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
	if (resolvedTheme !== undefined) {
	  setIsLoading(false);
	  const mapping = imageMappings[imageName];
	  // Check if the resolved theme is a valid key in the mapping
	  if (mapping.hasOwnProperty(resolvedTheme)) {
		setImageSrc((mapping as any)[resolvedTheme]);
	  } else {
		console.error(
		  `Image source not found for theme "${resolvedTheme}" and image "${imageName}".`
		);
	  }
	}
  }, [resolvedTheme, imageName]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!imageSrc) {
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
