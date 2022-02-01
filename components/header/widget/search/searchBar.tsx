import React, { useState } from "react";
import Link from "next/link";

import {
	SearchContainer,
	SearchInput,
	SearchSpan,
} from "../../../styled-components/view";
import SearchSVG from "./searchSVG";

const SearchBar: React.FC = (): JSX.Element => {
	const [searchInput, setSearchInput] = useState("");
	return (
		<SearchContainer>
			<SearchInput
				value={searchInput}
				placeholder="Rechercher tout"
				onChange={(event) => setSearchInput(event.target.value)}
				onBlur={(event) => setSearchInput(event.target.value)}
				tabIndex={0}
			/>
			<SearchSpan>
				<Link href={`/search/${encodeURIComponent(searchInput)}`}>
					<a>
						<SearchSVG />
					</a>
				</Link>
			</SearchSpan>
		</SearchContainer>
	);
};

export default SearchBar;
