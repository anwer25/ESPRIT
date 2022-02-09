import React from "react";
import Image from "next/image";
import { articleItemsProps } from "../../../../utils/types";
import {
	ArticleContainer,
	ArticleImageContainer,
	ArticleItemContainer,
	ArticleParaContainer,
	ArticleTitleContainer,
} from "../../../styled-components/view";
import {
	ArticleNumberText,
	ArticleTitleText,
	ArticleText,
} from "../../../styled-components/text";

// eslint-disable-next-line no-undef
const Items: React.FC<articleItemsProps> = ({ data }): JSX.Element => (
	<ArticleContainer>
		{data.map((value, ItemNumber) => {
			if (ItemNumber !== 3) {
				return (
					<ArticleItemContainer key={ItemNumber}>
						<ArticleImageContainer>
							<Image src={value.image} alt={value.title} />
						</ArticleImageContainer>
						<ArticleTitleContainer>
							<ArticleNumberText>
								{value.number}
							</ArticleNumberText>
							<ArticleTitleText>{value.title}</ArticleTitleText>
						</ArticleTitleContainer>
						<ArticleParaContainer>
							<ArticleText>{value.para}</ArticleText>
						</ArticleParaContainer>
					</ArticleItemContainer>
				);
			}
			return null;
		})}
	</ArticleContainer>
);

export default Items;
