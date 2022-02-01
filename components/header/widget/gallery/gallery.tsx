import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
// @ts-ignore
// eslint-disable-next-line import/extensions,import/no-unresolved
import { images } from "../../../../lib/images-data";
import {
	GalleryContainer,
	ImageGallery,
	Next,
	Prev,
	// eslint-disable-next-line import/extensions
} from "../../../styled-components/view";

// TODO: FIX Gallery

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000, // TODO: fix gallery from here
		opacity: 0,
		zIndex: -2,
		display: "none",
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
		display: "block",
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 1000 : -1000, // TODO: fix gallery from here
		opacity: 0,
		display: "none",
	}),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
	Math.abs(offset) * velocity;

// eslint-disable-next-line no-undef
const Gallery: React.FC = (): JSX.Element => {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, images.length, page);
	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};
	return (
		<GalleryContainer>
			<AnimatePresence initial={false} custom={direction}>
				<ImageGallery
					key={page}
					src={images[imageIndex]}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 600, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
				/>
			</AnimatePresence>
			<Next onClick={() => paginate(1)}>‣</Next>
			<Prev onClick={() => paginate(-1)}>◂</Prev>
		</GalleryContainer>
	);
};

export default Gallery;
