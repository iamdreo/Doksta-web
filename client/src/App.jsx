import React, { Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

/**
|--------------------------------------------------
| App file contains entire app routes 
|--------------------------------------------------
*/

const Products = React.lazy(() => import('./components/Products'));
const Product = React.lazy(() => import('./components/Product'));
const Preview = React.lazy(() => import('./components/Preview'));
const AddProduct = React.lazy(() => import('./components/AddProduct'));
const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <ErrorBoundary>
              <Route exact path="/" component={Products} />
              <Route path="/product/:id" component={Product} />
              <Route path="/addproduct" component={AddProduct} />
              <Route path="/preview/:id" component={Preview} />
            </ErrorBoundary>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
