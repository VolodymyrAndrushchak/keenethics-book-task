import React, { Component, PropTypes } from 'react';
import './login.css';
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let email = this.refs.userEmail.value;
    let password = this.refs.userPass.value;

    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        browserHistory.push('/cabinet');
      }
    });
  }

  render() {
    return (
      <div id="body-wrapper">
        <div id="main-wrapper">
          <div id="wrapper">
              <p id = "nameAuth">Log in</p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label for="inputEmail">Email</label>
                <input ref="userEmail" type="email" className="form-control" id="inputEmail" placeholder="Email" required/>
              </div>

              <div className="form-group">
                <label for="inputPassword">Password</label>
                <input ref="userPass" type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
              </div>

              <p id = "status-login"></p>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
