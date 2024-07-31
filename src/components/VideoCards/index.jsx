"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { formatDate } from "@/constants/useFormatDate";

export default function VideoCards() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/getAssets");
        const data = await response.json();
        if (data.data) {
          setVideos(data.data);
        } else {
          setError("No videos found");
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Error fetching videos");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main className="grid place-items-center min-h-screen bg-white">
      <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <Link href={`/video/${video.id}`} key={video.id}>
              <div className="bg-[#c9d08c] shadow-lg rounded p-3 cursor-pointer">
                <div className="group relative">
                  <Image
                    className="w-full h-48 object-cover rounded"
                    src={`https://image.mux.com/${video.playback_ids[0].id}/thumbnail.jpg?time=5`}
                    alt={video.title}
                    width={500}
                    height={300}
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-xs text-center px-4 mb-4">
                      {video.description}
                    </p>
                    <div className="flex justify-evenly w-full">
                      <button className="hover:scale-110 text-white transition">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          className="bi bi-play-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-black text-lg font-semibold">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 font-semibold">
                    {video.created_at
                      ? formatDate(video.created_at)
                      : "Unknown date"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
