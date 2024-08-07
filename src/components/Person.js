 import { Component } from "react";

// Variables for inline style
const style = { maxWidth: "650px" };
const styleAlert = { width: "650px", fontSize: "1.3rem" };
const styleBio = { fontSize: "1.1rem" };


class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Lamine DiattaLupita Nyong'o",
      bio: "Lupita Nyong'o est une actrice et réalisatrice mexico-kényane, née le 1er mars 1983 à Mexico Elle accède à la notoriété grâce à son interprétation de Patsey dans le drame acclamé Twelve Years a Slave. Ce rôle lui vaut de nombreuses récompenses, dont, le 2 mars 2014, l'Oscar de la meilleure actrice dans un second rôle. Elle a été désignée  Plus belle femme du monde en 2014 par le magazine américain People.",
      imgSrc: require("../images/img.jpg"),
      profession: "Mannequin professionnel",
      shows: false,
      date: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // function to toggle the state of shows
  handleClick() {
    this.setState({ shows: !this.state.shows });
  }

  // We call componentDidMount to set a timer if the component is mounted
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: this.state.date + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // We call componentWillUnmount to reset the timer if the component is unmounted
  componentWillUnmount = () => {
    if (!this.state.shows) {
      clearInterval(this.timerID);
    }
  };

  render() {
    const { fullName, bio, imgSrc, profession, shows, date } = this.state;

    return (
      <div className="person">
        <button
          type="button"
          className="btn btn-primary button"
          onClick={this.handleClick}
        >
          {!shows ? "Show" : "Hide"} person
        </button>
        {shows && (
          <div className="card mb-3" style={style}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className="img-fluid rounded-start"
                  src={imgSrc}
                  alt="my profile"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">{fullName}</h4>
                  <h5 className="card-text">{profession}</h5>
                  <p className="card-text" style={styleBio}>
                    {bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div style={styleAlert} class="alert alert-info" role="alert">
          {shows ? (
            <p>The last component was mounted since: {date} secondes.</p>
          ) : (
            <p>The last component was umounted.</p>
          )}
        </div>
      </div>
    );
  }
}

export default Person;
