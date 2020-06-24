import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CardDeck, Button, Card } from "react-bootstrap"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: localStorage.getItem("order").split(","),
      dishes: [],
      user: 1,
      table: 4
    }
  }
  componentDidMount() {
    fetch('http://localhost:9000/api/db/showalldishes', { method: "GET" })
      .then(response => response.json())
      .then(result => {
        this.setState({ dishes: result["result"] })
      })
  }
  addToOrder(id) {
    const order = localStorage.getItem("order")
    localStorage.setItem("order", order + "," + id);
    this.setState({ orderList: [...this.state.orderList, id] })
  };
  removeFromOrder(id) {
    var order = localStorage.getItem("order")
    var index = order.replace(id, "")
    var orderlist1 = this.state.orderList;
    localStorage.setItem("order", index);
  };
  isInList(id) {
    return this.state.orderList.find(order => order === id);
  }
  makeOrder() {
    fetch('http://localhost:9000/api/db/order/neworder/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: 'orderList=' + localStorage.getItem("order") + '&table=' + this.state.table + '&user=' + this.state.user
    })
      .then(response => response.json())
      .then(result => {
        this.setState({ "orderList": [] })
        localStorage.setItem("order", "")
        this.props.history.push('/foodOrder/' + result._id);
      })
  }
  render() {
    return (
      <div className="d-flex flex-column " >
        Dishes List
        <CardDeck className="m-4" >
          {
            this.state && this.state.dishes.map(name => {
              return (
                <Card style={{ width: '18rem' }}>
                  <Card.Img src={"http://localhost:9000/images/" + name["image"]} ></Card.Img>
                  <Card.Title>{name["name"]}</Card.Title>
                  <Card.Text>cost:{name["cost"]} uah</Card.Text>
                  <Button action href={"/dishes/" + name["_id"]}> Show more</Button>
                  <Button action disabled={this.isInList(name["_id"])} onClick={() => this.addToOrder(name["_id"])}> Add to order </Button>
                  <Button action disabled={!this.isInList(name["_id"])} onClick={() => this.removeFromOrder(name["_id"])} variant="danger">Remove from list</Button>
                </Card>
              )
            })
          }
        </CardDeck>
        <Button onClick={() => this.makeOrder()}>Make Order</Button>
      </div >
    );
  }
}

export default Home;