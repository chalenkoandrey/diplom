import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CardDeck, Button, Card } from "react-bootstrap"

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
        <CardDeck>
          {
            this.state && this.state.dishes.map(name => {
              return (
                <Card style={{ width: '18rem', height: '15rem', left: '10%', right: '-50%' }}>
                  <Card.Img src={"http://localhost:9000/images/" + name["image"]} ></Card.Img>
                  <Card.Title>{name["name"]}</Card.Title>
                  <Card.Text>cost:{name["cost"]} uah</Card.Text>
                  <Button action href={"/dishes/" + name["_id"]}>Add to order </Button>
                </Card>
              )
            })
          }
        </CardDeck>
      </div >
    );
  }
}

export default Home;