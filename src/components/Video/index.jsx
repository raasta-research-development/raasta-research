"use client";
import React, { useState, useEffect } from "react";
import MuxPlayer from "@mux/mux-player-react";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoAssets = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/getAssets");
        const data = await response.json();

        if (data?.data) {
          const videoUrls = data.data.map((asset) => {
            const playbackId = asset?.playback_ids?.[0]?.id;
            if (playbackId) {
              return `https://stream.mux.com/${playbackId}.m3u8`;
            }
            return null;
          });

          setVideos(videoUrls.filter(Boolean));
        } else {
          setError("No video assets found.");
        }
      } catch (error) {
        console.error("Error fetching video assets:", error);
        setError("Error loading videos. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoAssets();
  }, []);

  if (isLoading) {
    return <div>Fetching Videos...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!videos.length) {
    return <div>No videos found.</div>;
  }

  return (
    <div>
      {videos.map((videoUrl, index) => (
        <div key={index}>
          <MuxPlayer src={videoUrl} />
        </div>
      ))}
    </div>
  );
};

export default Video;
