import React, { Fragment, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import AllArtworks from "../components/AllArtworks";
import Header from "../components/Header.js";

export const GET_ARTWORKS = gql`
  query getArtworks {
    artworks {
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

///COMMENT OUT
// export const ARTWORK_TILE_DATA = gql`
//   fragment ArtworkTile on Artwork {
//     __typename
//     id
//     title
//   }
// `;

// export const GET_ARTWORKS = gql`
//   query getArtworks {
//     artworks {
//       hasMore
//       artworks {
//         ...ArtworkTile
//       }
//     }
//   }
// `;

// interface ArtworksProps extends RouteComponentProps {}

// const Artworks: React.FC<ArtworksProps> = () => {
//   const {
//     data,
//     loading,
//     error
//   } = useQuery<
//     GetArtworkListTypes.GetArtworkList,
//     GetArtworkListTypes.GetArtworkListVariables
//   >(GET_ARTWORKS);

//   if (loading) return <Loading />;
//   if (error) return <p>ERROR</p>;
//   if (!data) return <p>Not found</p>;

//   return (
//     <Fragment>
//       <Header />
//       {data.launches &&
//         data.launches.launches &&
//         data.launches.launches.map((launch: any) => (
//           <ArtworkTile key={launch.id} launch={launch} />
//         ))}
//     </Fragment>
//   );
// }

// export default Launches;
