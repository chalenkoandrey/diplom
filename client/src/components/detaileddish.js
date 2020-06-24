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
        console.log(this.state.dish);
      })

  }
  addToOrder(id) {
    const order = localStorage.getItem("order")
    localStorage.setItem("order", order + "," + id);
  };
  isInList(id) {
    return localStorage.order.split(",").find(order => order === id)

  }
  render() {
    return (
      <div className="dish">
        {this.state && <img src={"http://localhost:9000/images/" + this.state.dish["image"]} width="200dp" height="200px"></img>}<br></br>
        Name={this.state && this.state.dish["name"]}<br></br>
        cost={this.state && this.state.dish["cost"]}<br></br>
        time={this.state && this.state.dish["time"]}<br></br>
        type={this.state && this.state.dish["type"]}<br></br>
        {this.state && <Button action disabled={this.isInList(this.state.dish["_id"])} onClick={() => this.addToOrder(this.state.dish["_id"])}> Add to order </Button>}
      </div >
    );
  }
}

export default DetaildeDishes;