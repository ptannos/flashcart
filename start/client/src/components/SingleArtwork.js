import React from "react";
import Footer from "./footer";

class SingleArtwork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      artist: "",
      guess: "",
      answer: false,
      tryAgain: false,
      next: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckOrigin = this.handleCheckOrigin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (this.state.guess === "") {
      this.setState({ tryAgain: false });
      this.setState({ answer: false });
    }
  }

  handleCheckOrigin() {
    const { guess } = this.state;
    const originAnswer = this.props.data.artwork.place_of_origin;
    if (guess === originAnswer) {
      this.setState({ tryAgain: false });
      this.setState({ answer: true });
    } else {
      this.setState({ tryAgain: true });
    }
  }

  render() {
    console.log("props!!!", this.props);
    console.log("state!!!", this.state);
    const { imageUrl } = this.props.data.artwork.image;
    const { title, artist_display, date_display, place_of_origin } =
      this.props.data.artwork;
    const { handleChange, handleCheckOrigin } = this;
    const { guess, answer, tryAgain } = this.state;
    return (
      <div>
        <div className="artwork-container">
          <img src={imageUrl} />
          <div id="answer" className="artwork-child">
            <p>
              <label htmlFor="guess">Place of origin:</label>
            </p>
            <input name="guess" onChange={handleChange} value={guess}></input>
            {answer === true ? <p>You got it!</p> : ""}
            {tryAgain === true ? <p>Try again!</p> : ""}
            <p>
              <button onClick={() => handleCheckOrigin()}>Check answer</button>
            </p>
            <p>
              <button onClick={() => this.setState({ answer: true })}>
                I give up
              </button>
            </p>
            <div className="solution">
              {answer === true ? (
                <table>
                  <tbody>
                    <tr>
                      <td>Title: </td>
                      <td>{title}</td>
                    </tr>
                    <tr>
                      <td>Artist:</td>
                      <td>{artist_display}</td>
                    </tr>
                    <tr>
                      <td>Date:</td>
                      <td>{date_display}</td>
                    </tr>
                    <tr>
                      <td>Origin </td>
                      <td>{place_of_origin}</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <Footer next={this.state.next} />
      </div>
    );
  }
}

export default SingleArtwork;
