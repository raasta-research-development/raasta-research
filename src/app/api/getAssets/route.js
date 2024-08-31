import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

const customMetadata = [
  {
    title: "Exciting Adventure Video",
    description: "Join us on an thrilling journey through the wilderness.",
  },
  {
    title: "Cooking Masterclass",
    description: "Learn to cook like a pro with our step-by-step guide.",
  },
  {
    title: "Tech Review 2024",
    description: "An in-depth look at the latest gadgets and innovations.",
  },
  {
    title: "Fitness Challenge",
    description: "30-day workout plan for a healthier you.",
  },
  {
    title: "Art Exhibition Highlights",
    description:
      "Explore the most captivating pieces from our recent gallery show.",
  },
];

export async function GET() {
  try {
    const result = await mux.video.assets.list();
    const assets = result.data;
    const assetsWithCustomMetadata = assets.map((asset, index) => ({
      ...asset,
      title: customMetadata[index % customMetadata.length].title,
      description: customMetadata[index % customMetadata.length].description,
    }));

    return NextResponse.json({ data: assetsWithCustomMetadata });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Error fetching assets" });
  }
}
