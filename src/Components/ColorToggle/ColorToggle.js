import React, { Component } from "react";
import "./ColorToggle.css";
const { ipcRenderer } = window.require("electron");

class ColorToggle extends Component {
  state = {
    cssModifier: false
  };

  handleClick = color => {
    // console.log(color);
    this.setState({
      cssModifier: !this.state.cssModifier
    });
    ipcRenderer.send("send-filter-color", this.props.symbol);
  };

  render() {
    let cssClass = "";
    const { cssModifier } = this.state;
    const { color } = this.props;
    if (cssModifier) {
      cssClass = "toggleFilter";
    }
    return (
      <button
        onClick={() => this.handleClick(color)}
        className={`ColorToggle__${color} ${cssClass}`}
      />
    );
  }
}

export default ColorToggle;
