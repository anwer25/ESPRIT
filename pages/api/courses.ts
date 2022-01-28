import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

const images = [
	"./Rectangle28.png",
	"./Rectangle28(5).png",
	"./Rectangle28(4).png",
	"./Rectangle28(3).png",
	"./Rectangle28(6).png",
	"./Rectangle28(1).png",
	"./Rectangle28(2).png",
	"./Thumbnail.png",
];

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
