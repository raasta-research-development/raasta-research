import { NextResponse } from "next/server";

const MUX_TOKEN_ID = process.env.MUX_TOKEN_ID;
const MUX_TOKEN_SECRET = process.env.MUX_TOKEN_SECRET;
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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Video ID is required" },
      { status: 400 }
    );
  }

  const url = `https://api.mux.com/video/v1/assets/${id}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(MUX_TOKEN_ID + ":" + MUX_TOKEN_SECRET).toString("base64"),
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const { playback_ids, status, created_at, duration, aspect_ratio } =
      data.data;
    const randomIndex = Math.floor(Math.random() * customMetadata.length);
    const { title, description } = customMetadata[randomIndex];

    return NextResponse.json({
      data: {
        id,
        playback_ids,
        status,
        created_at,
        duration,
        aspect_ratio,
        title,
        description,
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: error.message || "Error fetching video asset" },
      { status: 500 }
    );
  }
}
