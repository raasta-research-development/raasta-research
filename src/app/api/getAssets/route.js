import { NextResponse } from "next/server";
import Mux from "@mux/mux-node";

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

export async function GET() {
  try {
    const result = await mux.video.assets.list();
    const assets = result.data;
    return NextResponse.json({ data: assets });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Error fetching assets" });
  }
}
