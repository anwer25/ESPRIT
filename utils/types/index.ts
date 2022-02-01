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
export type gridItemProps = { data: Array<exploreData> };

export type slideProps = { reviews: Array<slideDataProps> };
