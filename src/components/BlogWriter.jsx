import React, {Component} from "react";
import ReactDOM from 'react-dom';

class BlogWriter extends Component {
  submit = () => {
    var title = this.refs.title.value;
    var content = this.refs.content.value;
  };

  render() {
    return (
      <div className="ui basic vertical segment">
        <div className="ui divider hidden"></div>
        <div className="ui form">
          <div className="field">
            <label>Title</label>
            <input ref="title" type="text"/>
          </div>
          <div className="field">
            <label>Content</label>
            <textarea ref="content" rows="6"></textarea>
          </div>
          <button className="ui secondary basic button" onClick={this.submit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default BlogWriter;