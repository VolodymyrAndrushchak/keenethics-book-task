import Footer from './component/footer/footer.jsx';
import React, { Component } from 'react';
import { Link, browserHistory } from "react-router";
import './App.css';

// App component - represents the whole app

class App extends Component {

  constructor(props){
    super(props);

    this.cabinet = this.cabinet.bind(this);
  }

  cabinet(){
    //console.log(Meteor.user());
    if ( Meteor.user()) {
      browserHistory.push('/cabinet');
    }
    else {
      browserHistory.push('/login');
    }

  }

  render() {
    return (
      <div className = "wrapper">
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
              <div className="regist col-lg-5 col-md-6 col-sm-6 col-xs-6">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 col-md-11 col-sm-11 col-xs-12">
                      <ul id = "header-list">
                        <li onClick={this.cabinet}><a>Cabinet</a></li>
                        <li><a><Link to = "/registration">Registration</Link></a></li>
                        <li><a><Link to = "/login">log in</Link></a></li>
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

        <div className="banner"></div>
        <div className="main-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-0"></div>
              <div className="main-content-padding col-lg-10 col-md-10 col-sm-12" >
                <h2>Welcome to our club!</h2>
                <p id = "mc-text-after-title">
                Sometimes you have desire to find and edit necessary books.</p>
                <h3> Now your problem is solved.</h3>
                <p id = "mc-text-after-problem">Simply registered and you get opportunity:</p>

                <div className="fluid-container mc-list-opportunity">
                  <div className="row">
                    <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className = "opportunity1">fast, available and simple registration and login</div>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12" >
                      <div className = "opportunity2">you can simply check your books</div>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className = "opportunity3">you can simply edit your books</div>
                    </div>
                  </div>
                </div>

                <h3>For this you must</h3>

                <div className="fluid-container mc-list-sequence">
                  <div className="row">
                    <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className = "opportunity1">register in this service</div>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className = "opportunity2">add your books</div>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div className = "opportunity3">edit your books</div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-1 col-md-1 col-sm-0"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
