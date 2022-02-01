import React, { useState } from "react";
import Image from "next/image";
import { keyframes } from "styled-components";
import {
	AnimationFade,
	DotContainer,
	Gallery,
	Galleryli,
	SlideShowContainer,
} from "./styledComponents/views";

const imgUrls = [
	"./p1.png", 
	"./p2.png", 
    "./p3.png", 
    "./p4.png", 


]; 


const myLoader = ({ src, width, quality }) =>
	`${src}?w=${width}&q=${quality || 75}`;
let slideIndex = 1;
// eslint-disable-next-line no-use-before-define
showSlides(slideIndex);

function plusSlides(n) {
	// eslint-disable-next-line no-use-before-define
	showSlides((slideIndex += n));
}

function currentSlide(n: number) {
	// eslint-disable-next-line no-use-before-define
	showSlides((slideIndex = n));
}

function showSlides(n: number) {
	let i;
	const slides = document.getElementsByClassName("mySlides");
	const dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	// eslint-disable-next-line no-plusplus
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// eslint-disable-next-line no-plusplus
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
}

//test animationnn------

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}

// eslint-disable-next-line no-undef

const Parteneriat: React.FC = (): JSX.Element => {
	const [tovalue] = useState(4);
	const [fromValue, setFromValue] = useState(1);
	this.render();
	return (
					<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
	
			
	);
};

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="image-slide" style={styles}></div>
	);
};


export default Parteneriat;
