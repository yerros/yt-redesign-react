import React, { Component } from "react";
import { connect } from "react-redux";
import MenuLight from "../assets/MenuLight.png";
import MenuDark from "../assets/MenuDark.png";
import LogoLight from "../assets/logo-light.png";
import LogoDark from "../assets/logo-dark.png";
import { Image, Button } from "react-bootstrap";
import { setToogle, setTheme } from "../actions/themeActions";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isActive: true,
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
  toogle = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log(this.state.isActive);
    this.handleToogle();
  };
  handleToogle = () => {
    this.state.isActive
      ? this.props.setToogle(" toogled")
      : this.props.setToogle("");
  };
  toggleTheme = () => {
    const { theme } = this.props.menu;

    if (theme === "lightMode") {
      this.props.setMenu("darkMode");
    } else {
      this.props.setMenu("lightMode");
    }
  };
  render() {
    return (
      <div className="header">
        <Button className="btn bg-transparent border-0" onClick={this.toogle}>
          <Image className="menu-img" src={this.menuImage()} />
        </Button>
        <div className="logo">
          <Image src={this.logoImage()} />
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" value="" placeholder="Search" />
            <span className="material-icons search-icon">search</span>
          </div>
          <div className="header-account">
            <button className="btn-transperent btn btn-sm">
              <span className="material-icons">video_call</span>
            </button>
            <button className="btn-transperent btn btn-sm">
              <span className="material-icons">view_quilt</span>
            </button>
            <button className="btn-transperent btn btn-sm">
              <span className="material-icons">notification_important</span>
            </button>
            <button
              className="btn-transperent btn btn-sm"
              onClick={this.toggleTheme}
            >
              {this.props.menu.theme === "lightMode" ? (
                <span className="material-icons">dark_mode</span>
              ) : (
                <span className="material-icons">light_mode</span>
              )}
            </button>
            <Button className="btn btn-sm button">Sign In</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menu: state.themeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToogle: (toogle) => dispatch(setToogle(toogle)),
    setMenu: (theme) => dispatch(setTheme(theme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
