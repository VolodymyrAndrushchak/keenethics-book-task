import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router'
import { Accounts } from 'meteor/accounts-base'
import './registr.css';

class Registr extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.refs.userName.value;
    let email = this.refs.userEmail.value;
    let password = this.refs.userPass.value;
    let passwordAgain = this.refs.userPassAgain.value;
    this.setState({error: "test"});
    console.log(111);

    if ( password === passwordAgain) {
      Accounts.createUser({email: email, username: name, password: password}, (err) => {
        if(err){
          this.setState({
            error: err.reason
          });
          console.log(err.reason);
        } else {
          browserHistory.push('/login');
        }
      });
    }
    else {
      this.refs.statusRegistr.innerHTML = "Different password in fields";
    }
  }

  render() {
    return (
      <div id="body-wrapper">
        <div id="main-wrapper">
          <div id="wrapper">
            <p id = "nameAuth">Registration</p>
            <form>
              <div className="form-group">
                <label for="inputEmail">Your name and surname</label>
                <input ref="userName" type="text" className="form-control" id="inputEmail" placeholder="Your name and surname" required />
              </div>

              <div className="form-group">
                <label for="inputEmail">Email</label>
                <input ref="userEmail" type="email" name ="memail" className="form-control" id="inputEmail" placeholder="Email" required />
              </div>

              <div className="form-group">
                <label for="inputPassword">Password</label>
                <input ref="userPass" type="password" className="form-control" id="inputPassword" placeholder="Password - at least 8 symbols" pattern="[a-zA-Z0-9_@#$%<^&*]{8,}" required />
              </div>

              <div className="form-group">
                <label for="inputPassword">Repeat password</label>
                <input ref="userPassAgain" type="password" className="form-control" id="inputPassword" placeholder="Repeat password" pattern="[a-zA-Z0-9_@#$%<^&*]{8,}" required />
              </div>

              <p id = "statusPass" ref="statusRegistr"></p>

              <button  className="btn btn-primary" onClick={this.handleSubmit} >Regist</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Registr;
