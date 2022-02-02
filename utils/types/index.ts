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

export interface footerLink {
	name: string;
	link: string;
}

export type linkGeneratorProps = { links: Array<footerLink>; section: string };
export type gridItemProps = { data: Array<exploreData> };

export type slideProps = { reviews: Array<slideDataProps> };
