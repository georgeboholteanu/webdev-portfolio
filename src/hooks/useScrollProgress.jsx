import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
	const [completetion, setCompletion] = useState(0);

	useEffect(() => {
		const updateScrollCompletion = () => {
			const currentProgress = window.scrollY;
			const scrollHeight =
				document.body.scrollHeight - window.innerHeight;

			if (scrollHeight) {
				setCompletion(
					Number(currentProgress / scrollHeight).toFixed(2) * 100
				);
				console.log(scrollHeight);
			}
		};

		// event
		window.addEventListener("scroll", updateScrollCompletion);
		//clear event
		return () =>
			window.removeEventListener("scroll", updateScrollCompletion);
	}, []);

	return completetion;
};

export default useScrollProgress;
