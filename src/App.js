import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Navbar from "./components/Navbar";
import { setTheme } from "./actions/themeActions";
import Header from "./components/Header";

class App extends Component {
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
      <ThemeProvider
        theme={this.props.menu.theme === "lightMode" ? lightTheme : darkTheme}
      >
        <>
          <GlobalStyles />
          <Header />
          <div className="wrapper">
            <Navbar />
            <div className="main">
              test
              <footer></footer>
            </div>
          </div>
        </>
      </ThemeProvider>
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
    setMenu: (theme) => dispatch(setTheme(theme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
