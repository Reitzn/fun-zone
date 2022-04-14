import React, {useContext} from "react";
import Banner from "../components/home/banner/Banner";
import MediaLinks from "../components/home/media-links/MediaLinks";
import { UserContext } from "../context/UserContext";

export default function Home(props) {
  const { name, banner, socialMedia } = props;

  const msg = useContext(UserContext);

  return (
    <>
    <p>{msg}</p>
      <h1>{name}</h1>
      <Banner {...banner} />
      <MediaLinks {...socialMedia} />
    </>
  );
}
