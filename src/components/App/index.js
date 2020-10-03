import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routers } from '../../constants/router';
import Layout from '../Shared/Layout';

function App() {
  function renderRouters() {
    return routers.map(({ path, component, exact }) => (
      <Route key={path} path={path} component={component} exact={exact} />
    ));
  }
  return (
    <Layout>
      <Switch>{renderRouters()}</Switch>
    </Layout>
  );
}

export default App;
