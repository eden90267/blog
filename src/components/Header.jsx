import React from 'react';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  sidebar = () => {
    $(this.refs.sidebar).sidebar('toggle');
  };

  render() {
    var Items = (
        <div className={'item'} onClick={this.props.service}>
          Service
        </div>
    );

    return (
        <div className="ui grid">
          <div className="computer only row">
            <div className="column">
              <div className={'ui top fixed menu'}>
                <div className={'left menu'}>
                  <div className={'item'}>
                    <strong>{this.props.serviceName}</strong>
                  </div>
                  {Items}
                </div>
              </div>
            </div>
          </div>

          <div className="tablet only mobile only row">
            <div className="column">
              <div className="ui top fixed menu">
                <div className={'left menu'}>
                  <div className={'item'} onClick={this.sidebar}>
                    <i className="sidebar icon"></i>
                  </div>
                </div>
              </div>

              <div ref="sidebar" className="ui sidebar inverted vertical menu">
                <div className={'item'}>
                  <strong>{this.props.serviceName}</strong>
                </div>
                {Items}
              </div>
              <div className="pusher"></div>
            </div>
          </div>
        </div>
    )
  }
}

export default Header;