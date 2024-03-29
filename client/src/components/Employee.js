import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CardDeck, Button, Card } from "react-bootstrap"

import io from "socket.io-client";
const socket = io("http://localhost:9000");

class Employee extends Component {
  idDish = this.props["location"]["pathname"].split("/")[2]
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messages: [],
      user: "Employee",
      order: {}
    };
  }
  componentDidMount() {
    fetch('http://localhost:9000/api/db/order/show/' + this.idDish, { method: "GET" })
      .then(response => response.json())
      .then(result => {
        this.setState({ ...this.state, order: result["result"], user: result["result"].user })
        console.log(this.state.order);
      })
    fetch('http://localhost:9000/chat/', { method: "GET" })
      .then(response => response.json())
      .then(res => {
        this.setState({ ...this.state, messages: res });
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  sendMessage = e => {
    e.preventDefault();
    socket.emit("NEW_MESSAGE", {
      body: this.state.message,
      author: this.state.user
    });
    this.setState({ ...this.state, message: "" });
  };
  editOrder() {

  }
  render() {
    const { message } = this.state;
    socket.on("CHAT_MESSAGES", messages => this.setState({ ...this.state, messages: messages }));
    return (
      <div className="d-flex flex-column ">
        foodOrder<br></br>
        Table = {this.state && this.state.order["table"]} < br ></br >
        State = <input value={this.state && this.state.order["status"]}></input><Button onChange={this.editOrder}>Change State</Button> < br ></br>
        {
          <video id="videoPlayer" width="400" height="300" text-align="center" controls>
            <source src="http://localhost:9000/video/1.mp4" type="video/mp4"></source>
          </video>
        }
        {
          this.state && this.state.messages.map(message => (
            <li
              key={message._id}
            >
              <div className="chat-body ">
                <div >
                  <div>
                    <p style="color:red">
                      {message.author}
                    </p>
                  </div>
                </div>
                <p>{message.body}</p>
              </div>
            </li>
          ))
        }
        <form onSubmit={this.sendMessage}>
          <div className="input-group">
            <input
              autoFocus
              type="text"
              className="form-control"
              placeholder="Type your message here..."
              name="message"
              value={message}
              onChange={this.onChange}
              required
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Send
                    </button>
            </span>
          </div>
        </form>
      </div >
    );
  }
}

export default Employee;