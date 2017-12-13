import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from 'Source/utils/react-router-config'; // react-router-config 無法使用的替代方案

import routes from 'Source/router';

require('Source/less/theme.less');


ReactDOM.render(
  <BrowserRouter>
    <div>{renderRoutes(routes)}</div>
  </BrowserRouter>,
  document.querySelector('#app')
);

