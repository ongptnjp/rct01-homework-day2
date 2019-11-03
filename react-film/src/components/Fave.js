import React, { Component } from "react";

class Fave extends Component {

  state = {
    isFave: false
  }

  handleClick = e => {
    e.stopPropagation()
    console.log("handle Fave Click!", e);
    this.setState({ isFave: !this.state.isFave });
  }
  render () {
    const isFave = this.state.isFave ? "remove_from_queue" : "add_to_queue";
    return (
      <div className={"film-row-fave " + isFave} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave;