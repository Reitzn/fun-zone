import React from "react";
import Banner from "../components/banner/Banner";
import MediaLinks from "../components/media-links/MediaLinks";
import useWindowSize from "../hooks/useWindowSize";

export default function Home(props) {
  const size = useWindowSize();

  const { name, banner, socialMedia } = props;

  return (
    <>
    <h1>{name}</h1>
      <Banner {...banner} />
      <MediaLinks {...socialMedia} />
    </>
  );
}
