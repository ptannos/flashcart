import React from "react";

class Footer extends React.Component {
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
    return (
      <div>
        <footer>
          <a href={`/artwork/${this.state.next}`}>
            <button>Next</button>
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
