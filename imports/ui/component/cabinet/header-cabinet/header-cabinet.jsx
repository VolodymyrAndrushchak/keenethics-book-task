import React, { Component } from 'react';
import { Link, browserHistory } from "react-router";
import './header-cabinet.css';

class HeadCab extends Component {
  constructor(props) {
    super(props);

    this.listPage = this.listPage.bind(this);
    this.editPage = this.editPage.bind(this);
    this.logout = this.logout.bind(this);
  }

  listPage() {
    browserHistory.push('/cabinet');
  }

  editPage() {
    browserHistory.push('/editbook');
  }

  logout(event) {
    event.preventDefault();
    Meteor.logout();
    browserHistory.push('/');
  }

  render() {
    return (
      <header>
  			<div className="container-fluid">
  				<div className="row">
  					<div className="col-lg-1 col-md-0 col-sm-0 col-xs-0"></div>
  					<div className=" col-lg-5 col-md-6 col-sm-6 col-xs-6">
  						<div className="container-fluid">
  							<div className="row">
  								<div className = "col-lg-0 col-md-1 col-sm-1 col-xs-0"></div>
  								<div className = "header-logo col-lg-12 col-md-11 col-sm-11 col-xs-12"></div>
  							</div>
  						</div>
  					</div>
  					<div className="navbar-header col-lg-5 col-md-6 col-sm-6 col-xs-6">
  						<div className="container-fluid">
  							<div className="row">
  								<div className="col-lg-12 col-md-11 col-sm-11 col-xs-12">
  									<ul id = "header-list">
  										<li><a><Link to = "/">Main</Link></a></li>
  										<li><a onClick = {this.listPage}>List</a></li>
  										<li><a onClick = {this.logout}>Exit</a></li>
  									</ul>
  								</div>
  								<div className="col-lg-0 col-md-1 col-sm-1 col-xs-0"></div>
  							</div>
  						</div>

  					</div>
  					<div className="col-lg-1 col-md-0 col-sm-0 col-xs-0"></div>
  				</div>
  			</div>
  		</header>
    );
  }
}

export default HeadCab;
