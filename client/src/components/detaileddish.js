import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ListGroup, Button } from "react-bootstrap"

class DetaildeDishes extends Component {
  idDish = this.props["location"]["pathname"].split("/")[2]
  componentDidMount() {
    fetch('http://localhost:9000/api/db/detailed/' + this.idDish, { method: "GET" })
      .then(response => response.json())
      .then(result => {
        this.setState({ dish: result["result"] })
        this.props.dish = this.state.dish
        console.log(this.state.dish);
      })

  }
  render() {
    return (
      <div className="container">
        {this.state && this.state.dish["name"]}
        {this.state && this.state.dish["cost"]}
        <img src={"http://localhost:9000/images/" + this.props.dish.image} width="150" height="150"></img>
      </div >
    );
  }
}

export default DetaildeDishes;