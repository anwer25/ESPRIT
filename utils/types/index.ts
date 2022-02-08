export interface exploreData {
	image: string;
	title: string;
}

export interface slideDataProps {
	image: string;
	name: string;
	title: string;
	paragraph: string;
}

export interface slidePartnersDataProps {
	image: string;
	title: string;
}

export interface footerLink {
	name: string;
	link: string;
}

export interface articleItems {
	image: string;
	number: string;
	title: string;
	para: string;
}

export type articleItemsProps = { data: Array<articleItems> };

export type linkGeneratorProps = { links: Array<footerLink>; section: string };
export type gridItemProps = { data: Array<exploreData> };

export type slideProps = { reviews: Array<slideDataProps> };
export type partnersSlideProps = { image: Array<slidePartnersDataProps> };
