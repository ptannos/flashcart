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
      12267, 12985, 13004, 13123, 13125, 11827, 13415, 13417, 40184, 14105,
      14111, 12679, 12681, 10271, 11118, 12236, 12862, 12867, 12872, 12891,
      12930, 21678, 59927, 56175,
    ];
    const randomInt = Math.floor(Math.random() * 30);
    this.setState({ next: arrIds[randomInt] });
  }

  render() {
    console.log(this.props);
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
