import React, { Fragment, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import AllArtworks from "../components/AllArtworks";
import Header from "../components/Header.js";

export const GET_ARTWORKS = gql`
  query getArtworks {
    artworks {
      id
      image {
        imageUrl
      }
    }
  }
`;

// interface ArtworksProps extends RouteComponentProps {}

const Artworks = () => {
  const { data, loading, error } = useQuery(GET_ARTWORKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(data);

  return (
    <div>
      <Header />
      <AllArtworks data={data} />
    </div>
  );
};

export default Artworks;
