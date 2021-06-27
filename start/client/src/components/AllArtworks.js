import React from "react";

class AllArtworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: "",
    };
  }
  componentDidMount() {
    const arrIds = [
      12267, 12985, 13004, 13125, 11827, 13415, 13417, 40184, 14111, 12679,
      12681, 11118, 12236, 12867, 12872, 12891, 3441, 21678, 59927, 56175,
      12334, 12339, 12897, 30157, 30172, 58876, 9154, 7816, 9274, 5678, 6737,
      8858, 8617, 8489,
    ];
    const randomInt = Math.floor(Math.random() * 33);

    this.setState({ next: arrIds[randomInt] });
  }
  render() {
    const { artworks } = this.props.data;
    console.log(this.props.data);
    return (
      <div>
        <div className="options">
          <h1>HELPING ART HISTORY NERDS MEMORIZE FACTS SINCE 2021.</h1>
          <a href={`/artwork/${this.state.next}`}>
            <button>GUESS ORIGIN</button>
          </a>
          <button>GUESS AGE</button>
          {/* <button>GUESS THE ARTIST</button> */}
        </div>
        <hr />
        <div className="image-container">
          {artworks.map((artwork) => {
            return (
              <div className="image-child">
                <a href={`/artwork/${artwork.id}`}>
                  <img src={artwork.image.imageUrl} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllArtworks;
