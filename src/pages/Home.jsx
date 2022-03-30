import React from "react";
import Banner from "../components/home/banner/Banner";
import MediaLinks from "../components/home/media-links/MediaLinks";

export default function Home(props) {
  const { name, banner, socialMedia } = props;

  return (
    <>
      <h1>{name}</h1>
      <Banner {...banner} />
      <MediaLinks {...socialMedia} />
    </>
  );
}
