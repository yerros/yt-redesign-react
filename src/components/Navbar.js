import React, { Component } from "react";
import { connect } from "react-redux";
import MenuLight from "../assets/MenuLight.png";
import MenuDark from "../assets/MenuDark.png";
import LogoLight from "../assets/logo-light.png";
import LogoDark from "../assets/logo-dark.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menuWidth: "",
    };
  }
  menuImage = () => {
    const { theme } = this.props.menu;
    return theme === "lightMode" ? MenuLight : MenuDark;
  };
  logoImage = () => {
    const { theme } = this.props.menu;
    return theme === "lightMode" ? LogoLight : LogoDark;
  };
  componentDidMount() {
    this.toogleMenu();
  }
  toogleMenu = () => {
    const { toggleNavbar } = this.props.menu;
    return toggleNavbar
      ? this.setState({ menuWidth: "15%" })
      : this.setState({ menuWidth: "20%" });
  };
  render() {
    return (
      <>
        <nav className={`navigation${this.props.menu.toggleNavbar}`}>
          <ul className="navigation-list">
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">home</span>Home
              </button>
            </li>
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">local_fire_department</span>
                Trending
              </button>
            </li>
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">subscriptions</span>
                Subscriptions
              </button>
            </li>
            <hr />
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">folder</span>Library
              </button>
            </li>
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">history</span>History
              </button>
            </li>
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">watch_later</span>Watch later
              </button>
            </li>
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">star_outline</span>Favourites
              </button>
            </li>
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">favorite_border</span>Likes
                videos
              </button>
            </li>
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">music_video</span>Music
              </button>
            </li>
            <li>
              <button className="bg-transparent border-0">
                <span className="material-icons">games</span>Games
              </button>
            </li>
          </ul>
        </nav>
        <nav
          id="mobile-nav"
          class="navbar border-top navbar-dark navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom"
        >
          <ul class="navbar-nav nav-justified w-100">
            <li class="nav-item">
              <button className="bg-transparent border-0">
                <span className="material-icons">home</span>
              </button>
            </li>
            <li class="nav-item">
              <button className="bg-transparent border-0">
                <span className="material-icons">local_fire_department</span>
              </button>
            </li>
            <li class="nav-item">
              <button className="bg-transparent border-0">
                <span className="material-icons">subscriptions</span>
              </button>
            </li>
            <li class="nav-item">
              <button className="bg-transparent border-0">
                <span className="material-icons">folder</span>
              </button>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.themeReducer,
  };
};

export default connect(mapStateToProps)(Navbar);
