import { useMemo } from "react";
import {
	ApolloClient,
	InMemoryCache,
	NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const createIsomorphLink = () => {
	if (typeof window === "undefined") {
		// eslint-disable-next-line global-require
		const { SchemaLink } = require("@apollo/client/link/schema");
		// eslint-disable-next-line global-require
		const { schema } = require("../schema");
		return new SchemaLink({ schema });
	}
	// eslint-disable-next-line global-require
	const { HttpLink } = require("@apollo/client/link/http");
	return new HttpLink({ uri: "/api/graphql", credentials: "same-origin" });
};

const createApolloClient = (): ApolloClient<NormalizedCacheObject> =>
	new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: createIsomorphLink(),
		cache: new InMemoryCache(),
	});

const initializeApollo = (initialState = null) => {
	// eslint-disable-next-line no-underscore-dangle
	const _apolloClient = apolloClient ?? createApolloClient();
	if (initialState) {
		_apolloClient.cache.restore(initialState);
	}
	if (typeof window === "undefined") return _apolloClient;
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
};

const useApollo = (initialState: any) => {
	const store = useMemo(() => initializeApollo(), [initialState]);
	return store;
};

export { initializeApollo, useApollo };
