import React from "react";
import { gql, useQuery } from "@apollo/client";
import SingleArtwork from "../components/SingleArtwork";
import Header from "../components/Header";

export const GET_ARTWORK = gql`
  query getSingleArtwork($artworkId: ID!) {
    artwork(id: $artworkId) {
      id
      title
      date_display
      artist_display
      place_of_origin
      image {
        imageUrl
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Artwork = ({ artworkId }) => {
  const { loading, error, data } = useQuery(GET_ARTWORK, {
    variables: { artworkId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div>
      <Header />
      <SingleArtwork data={data} />
    </div>
  );
};

export default Artwork;
