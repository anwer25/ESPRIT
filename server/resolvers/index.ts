const resolvers = {
	Query: {
		viewer(_parent: any, _args: object, _context: any, _info: any) {
			return { id: 1, name: "anwer", status: "cached" };
		},
	},
};

export default resolvers;
