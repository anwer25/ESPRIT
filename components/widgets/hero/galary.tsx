import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "../../../lib/image-data";
import { ImageGalary } from "../../styledComponents/views";

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0,
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 1000 : -1000,
		opacity: 0,
	}),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
	Math.abs(offset) * velocity;

const Galary: React.FC = (): JSX.Element => {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, images.length, page);
	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};
	return (
		<>
			<AnimatePresence initial={false} custom={direction}>
				<ImageGalary
					key={page}
					src={images[imageIndex]}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
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
			<div className="next" onClick={() => paginate(1)}>
				‣
			</div>
			<div className="prev" onClick={() => paginate(-1)}>
				‣
			</div>
		</>
	);
};

export default Galary;
