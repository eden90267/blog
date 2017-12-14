import React from 'react';
import ReactDOM from 'react-dom';

import Header from "Source/components/Header";
import Footer from "Source/components/Footer";
import Design from "Source/components/Design";
import Coding from "Source/components/Coding";
import Middle from "Source/components/Middle";
import Service from "Source/components/Service";

class LandingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  design = () => {
    var $node = $(this.refs.app_selection);
    var $header = $(ReactDOM.findDOMNode(this.refs.header));

    $('html, body').stop().animate({
      scrollTop: $node.offset().top - $header.height()
    }, 400);
  };

  service = () => {
    var $node = $(this.refs.app_service);
    var $header = $(ReactDOM.findDOMNode(this.refs.header));

    $('html, body').stop().animate({
      scrollTop: $node.offset().top - $header.height()
    }, 400);
  };


  render() {
    var scrollIconStyle = {
      color: '#000',
      fontSize: '50px',
      textShadow: '0 3px 7px rgba(0,0,0,.5)',
      cursor: 'pointer',
      marginTop: '6%'
    };

    return (
      <div>
        <Header serviceName={'React'} ref="header" service={this.service}/>

        <section className="ui basic vertical segment header">
          <div className="ui container">
            <div className="ui basic very padded left aligned segment">
              <h1>REACT STUDIO</h1>
              <h2>Make Web Application Quicker</h2>
            </div>
            <div className="ui basic center aligned segment">
              <i className="angle down icon" style={scrollIconStyle} onClick={this.design}></i>
            </div>
          </div>
        </section>

        <section className="ui basic very padded segment" ref="app_selection">
          <Design/>
        </section>

        <section className="ui basic segment">
          <Middle/>
        </section>

        <div className="ui divider hidden"></div>

        <section className="ui basic segment body"></section>

        <section className="ui basic very padded segment">
          <Coding/>
        </section>

        <section className="ui basic segment" ref="app_service">
          <Service/>
        </section>

        <Footer serviceName={this.props.serviceName}/>
      </div>
    );
  }
}

export default LandingPage;