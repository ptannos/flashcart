import React from "react";

class SingleArtwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      artist: "",
      origin: "",
      answer: false,
      next: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckOrigin = this.handleCheckOrigin.bind(this);
    // this.handleNext = this.handleNext.bind(this);
  }

  componentDidMount() {
    const arrIds = [
      12267, 12985, 13004, 13123, 13125, 11827, 13415, 13417, 40184, 14105,
      14111, 12679, 12681, 10271, 11118, 12236, 12862, 12867, 12872, 12891,
      12930, 21678, 59927, 56175,
    ];
    const randomInt = Math.floor(Math.random() * 30);
    this.setState({ next: arrIds[randomInt] });
  }

  componentDidUpdate() {
    if (this.state.origin === this.props.data.artwork.place_of_origin) {
      this.state.answer = true;
      console.log("correct!!!!");
    } else {
      this.state.answer = false;
      console.log("wrong!!!!");
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCheckOrigin() {
    const { origin } = this.state;
    const originAnswer = this.props.data.artwork.place_of_origin;
    if (origin === originAnswer) {
      this.setState({ answer: true });
    }
  }

  // handleNext() {

  // }

  render() {
    // console.log(this.props);
    console.log(this.state);
    const { artwork } = this.props.data;
    const { handleChange, handleCheckOrigin, handleNext } = this;
    const { date, origin, answer } = this.state;
    return (
      <div>
        <img src={artwork.image.imageUrl} />
        <hr />
        <label htmlFor="origin">Place of origin:</label>
        <input name="origin" onChange={handleChange} value={origin}></input>
        <p>
          <button>Check answer</button>
        </p>
        {answer === true ? <p>You got it!</p> : ""}
        {/* <p>Estimated year:</p>
        <input name="date" onChange={handleChange} value={date}></input> */}
        <p>
          <a href={`/artwork/${this.state.next}`}>
            <button onClick={handleNext}>Next</button>
          </a>
        </p>

        {/* <h3>{artwork.title}</h3>
              {artwork.artist_display === "" ? (
                <p>Artist: Unknown</p>
              ) : (
                <p>Artist: {artwork.artist_display}</p>
              )}
              {artwork.date_display === "" ? (
                <p>Date: Unknown</p>
              ) : (
                <p>Circa: {artwork.date_display}</p>
              )}
              {artwork.place_of_origin === "" ? (
                <p>Place of Origin: Unknown</p>
              ) : (
                <p>Place of Origin: {artwork.place_of_origin}</p>
              )} */}
      </div>
    );
  }
}

export default SingleArtwork;
