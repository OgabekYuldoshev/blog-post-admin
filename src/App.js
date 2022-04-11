import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import { useAuth } from "./modules/auth/hooks"

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default () => {

  const { isAuthenticated, isFetched } = useAuth()

  if (!isFetched) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {routes.filter(route => route.auth === false).map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={withTracker(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </Router>
  }


  return <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.filter(route => route.auth === true).map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
};
