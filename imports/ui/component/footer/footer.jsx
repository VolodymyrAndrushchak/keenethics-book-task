import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <footer>
  			<div className="container-fluid">
  				<div className="row">
  					<div className="col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
  					<div className="col-lg-5 col-md-5 col-sm-6 col-xs-6">
  						<div className="container-fluid">
  							<div className="row">
  								<div className="col-lg-0 col-md-0 col-sm-1 col-xs-0"></div>
  								<div className="col-lg-12 col-md-12 col-sm-11 col-xs-12">
  									<div className="author">2017 SomeThing</div>
  								</div>
  							</div>
  						</div>
  					</div>
  					<div className="col-lg-5 col-md-5 col-sm-6 col-xs-6">
  						<div className="container-fluid">
  							<div className="row">
  								<div className="col-lg-12 col-md-12 col-sm-11 col-xs-12">
  									<div className="feedback">somethingservice@ukr.net</div>
  								</div>
  								<div className="col-lg-0 col-md-0 col-sm-1 col-xs-0"></div>
  							</div>
  						</div>
  					</div>
  					<div className="col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
  				</div>
  			</div>
  		</footer>
    )
  }
}

export default Footer;
