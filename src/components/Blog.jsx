import React, {Component} from "react";
import ReactdOM from 'react-dom';
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "Source/components/Footer";
import BlogWriter from "Source/components/BlogWriter";
import actions from "Source/actions";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
  return {
    service: state.service,
    blog: state.blog
  }
};

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

    this.state = {
      serviceName: this.props.service.serviceName,
      blog: this.props.blog
    };
  }

  componentWillMount = () => {
    this.props.dispatch(actions.service.getService());
    this.props.dispatch(actions.blog.entryList());
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      serviceName: nextProps.service.serviceName,
      blog: nextProps.blog
    });
  };

  render() {
    var entry, status;
    if (this.state.blog) {
      status = this.state.blog.status;
    }
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
                  <h1>{status}</h1>
                  <div className="ui vertically divided grid">
                    {entry}
                  </div>
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

        <Footer serviceName={this.state.serviceName}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Blog);