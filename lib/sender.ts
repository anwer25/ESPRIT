const searchSender = async (input: String): Promise<any> => {
	const data = await fetch(input);
	return data;
};

export { searchSender };
