import React from "react";
export const VideoCard=({ data })=> {
  if (!data || data.length === 0)
    return <h1 className="mt-[500px]">loading...</h1>;
  console.log("data is here ======>", data);
  const { snippet, statistics } = data;
  const { thumbnails, channelTitle, title } = snippet;

  return (
    <div
      style={{ height: "300px" }}
      className="p-3 rounded-md w-72 shadow-lg mt-2  "
    >
      <img className="rounded-md" src={thumbnails.medium.url} alt="" />
      <ul className="py-2">
        <li className="font-bold">
          <p className="h-12 overflow-hidden">{title}</p>
        </li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
}
export const NewVideoCard = ({data}) => {
  return (
    <div style={{border:"1px solid red"}} className=" border-red-800">
      
      <VideoCard data={data} />
    </div>
  );
};

