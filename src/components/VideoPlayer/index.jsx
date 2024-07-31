"use client";

import { useState, useEffect } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { formatDate } from "@/constants/useFormatDate";

export default function VideoPlayer({ id }) {
  const [video, setVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`/api/getAsset?id=${id}`);
        const data = await response.json();
        console.log("Video data:", data);
        if (data.data) {
          setVideo(data.data);
        } else {
          setError("Video not found");
        }
      } catch (err) {
        console.error("Error fetching video:", err);
        setError("Error fetching video");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!video) return <div>Video not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <MuxPlayer
            playbackId={video.playback_ids[0].id}
            metadata={{
              video_id: video.id,
              video_title: video.title,
            }}
          />
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">
            {video.title || "Untitled Video"}
          </h2>
          <p className="text-gray-600 mb-4">
            {video.description || "No description available"}
          </p>
          <p className="text-sm text-gray-500">
            Uploaded on:{" "}
            {video.created_at ? formatDate(video.created_at) : "Unknown date"}
          </p>
          <p className="text-sm text-gray-500">
            Duration: {Math.round(video.duration)} seconds
          </p>
          <p className="text-sm text-gray-500">
            Aspect Ratio: {video.aspect_ratio}
          </p>
        </div>
      </div>
    </div>
  );
}
