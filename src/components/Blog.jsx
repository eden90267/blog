import React, {Component} from "react";
import ReactdOM from 'react-dom';
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "Source/components/Footer";
import BlogWriter from "Source/components/BlogWriter";

class Entry extends Component {
  render() {
    var linkStyle = {
      color: 'black',
      cursor: 'pointer'
    };

    return (
      <div className="one column row">
        <div className="column">
          <Link to={'/blog' + this.props.id} style={linkStyle}>
            <h1>{this.props.title}</h1>
            <p>{this.props.content}</p>
          </Link>
        </div>
      </div>
    );
  }
}

class Blog extends Component {
  constructor() {
    super(...arguments);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header serviceName={'React'} />

        <section className="ui basic vertical segment blog-header">
          <div className="ui container">
            <div className="ui basic very padded left aligned segment">
              <h1>BLOG</h1>
            </div>
          </div>
        </section>

        <div className="ui divider hidden"/>

        <section className="ui basic segment">
          <div className="ui container">
            <div className="ui centered grid">
              <div className="eleven wide one column computer only tablet only row">
                <div className="column">
                  <BlogWriter />
                </div>
              </div>

              <div className="one column mobile only row">
                <div className="column">
                  <BlogWriter />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer serviceName={'React'}/>
      </div>
    );
  }
}

export default Blog;