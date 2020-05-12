import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ListGroup, Button } from "react-bootstrap"

class Home extends Component {
  componentDidMount() {
    fetch('http://localhost:9000/api/db/showalldishes', { method: "GET" })
      .then(response => response.json())
      .then(result => {
        this.setState({ dishes: result["result"] })
      })
  }
  render() {
    return (
      <div className="container">
        Dishes List
        <ListGroup>
          {
            this.state && this.state.dishes.map(name => {
              return (
                <ListGroup.Item action href={"/dishes/" + name["_id"]} >
                  <img src={"http://localhost:9000/images/" + name["image"]} width="150" height="150"></img>
                  {name["name"]}
                  cost:{name["cost"]} uah
                  <Button>Add to order </Button>
                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
      </div >
    );
  }
}

export default Home;