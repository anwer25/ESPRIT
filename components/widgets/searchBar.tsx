import React, { useState } from "react";
import Link from "next/link";
import {
	SearchForm,
	SearchInput,
	SearchButton,
} from "../styledComponents/views";
import SVG from "./searchSVG";

const SearchBar: React.FC = (): JSX.Element => {
	const [searchInput, setSearchInput] = useState("");

	return (
		<SearchForm>
			<SearchInput
				value={searchInput}
				placeholder="Rechercher tout"
				onChange={(event) => setSearchInput(event.target.value)}
				onBlur={(event) => setSearchInput(event.target.value)}
				tabIndex={0}
			/>
			<SearchButton tabIndex={0}>
				<Link href={`/search/${encodeURIComponent(searchInput)}`}>
					<a>
						<SVG />
					</a>
				</Link>
			</SearchButton>
		</SearchForm>
	);
};

export default SearchBar;
