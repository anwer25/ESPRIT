import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Data = {};

function imageBase64(image: fs.PathOrFileDescriptor) {
	const base64 = fs.readFileSync(image, "base64");
	return Buffer.from(base64, "base64");
}

const result: Buffer[] = [];

images.forEach((value) => {
	result.push(imageBase64(value));
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(JSON.stringify(result));
}
