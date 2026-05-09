import React, { lazy, Suspense } from 'react';
// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
import Header from './components/Header';
import Progress from './components/Progress';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <div>
            <Header />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth" component={AuthLazy} />
                <Route path="/" component={MarketingLazy} />
              </Switch>
            </Suspense>
          </div>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
