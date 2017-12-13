import React from 'react';

class Footer extends React.Component {
  render() {
    var footStyle = {
      marginTop: '50px'
    };
    var linkStyle = {
      marginLeft: '20px',
      color: '#FFF'
    };

    return (
        <div className="ui basic padded inverted center aligned segment footer" style={footStyle}>
          <p>
            <i className="mail outline icon"></i> eden90267@gmail.com
            <a href="https://www.facebook.com/eden90267" target="_blank" style={linkStyle}>
              <i className="facebook icon"></i>
            </a>
          </p>
          <p>Copyright &copy Eden Liu. All Rights Reserved.</p>
        </div>
    );
  }
}

export default Footer;