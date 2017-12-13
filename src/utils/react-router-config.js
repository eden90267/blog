import React from 'react';
import {Route} from "react-router-dom";

const renderRoutes = (routes) => {
  return (
    <div>
      {
        routes.map((route) => (
          <Route {...route} />
        ))
      }
    </div>
  );
};

export {renderRoutes};