import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentComponent from "./CommentComponent";


function WatchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [channelTitle, setChannelTitle] = useState("");
  const [watchdata, setWatchdata] = useState([]);
  const [channelLogo, setChannelLogo] = useState("");
  const dispatch = useDispatch();
  const API_KEY = "AIzaSyAyA-StRt_ncuVBDFLOUB3Y8V7uT-A9yus";

  useEffect(() => {
    dispatch(closeMenu());

    const videoId = searchParams.get("v");

    if (videoId) {
      fetchVideoInfo(videoId);
    }
  }, []);

  const fetchVideoInfo = async (videoId) => {
    try {
      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );

      if (videoResponse.ok) {
        const videoData = await videoResponse.json();
        setWatchdata(videoData?.items[0]?.snippet);
        const channelTitle = videoData.items[0]?.snippet?.channelTitle || "";
        setChannelTitle(channelTitle);

        fetchChannelLogo(channelTitle);
      } else {
        console.error("Error fetching video information");
      }
    } catch (error) {
      console.error("Error fetching video information", error);
    }
  };

  const fetchChannelLogo = async (channelTitle) => {
    try {
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${channelTitle}&key=${API_KEY}`
      );

      if (channelResponse.ok) {
        const channelData = await channelResponse.json();
        const logoUrl =
          channelData?.items[0]?.snippet?.thumbnails?.default?.url ||
          channelData?.items[0]?.snippet?.thumbnails?.medium?.url ||
          "";
        setChannelLogo(logoUrl);
      } else {
        console.error("Error fetching channel information");
      }
    } catch (error) {
      console.error("Error fetching channel information", error);
    }
  };

  return (
    <div className="flex justify-between w-full">
      <div className="w-[1000px]">
        <div className="mt-20 container mx-auto ml-7 rounded-lg">
          <iframe
            className="rounded-2xl"
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div>
            <h1 className="text-xl">{watchdata?.title}</h1>
            <div className="flex justify-between mt-2 items-center">
              <div className="flex items-center">
                <img
                  src={channelLogo}
                  alt="Channel Logo"
                  className="rounded-full w-10 h-10"
                />
                <h2 className="ml-2 font-semibold ">
                  {watchdata?.channelTitle}
                </h2>
              </div>
              <div>
                <ul className="flex items-center cursor-pointer">
                  <li className="mx-2 bg-gray-300 p-2 rounded-xl shadow-lg">
                    dislike
                  </li>
                  <li className="mx-2 bg-gray-300 p-2 rounded-xl shadow-lg">
                    share
                  </li>
                  <li className="mx-2 bg-gray-300 p-2 rounded-xl shadow-lg">
                    like
                  </li>
                  <li className="mx-2 bg-gray-300 p-2 rounded-xl shadow-lg">
                    download
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <CommentComponent />
        </div>
      </div>
      {/* <div className="bg-red-600 flex flex-col w-[300px]  mt-[5.25]">
      </div> */}
    </div>
  );
}

export default WatchPage;
