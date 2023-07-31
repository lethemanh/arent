import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import { isEmpty } from 'lodash';
import { TopPage } from 'app/pages/TopPage';
import { MyRecord } from 'app/pages/MyRecord';
import { Header } from 'app/components/Header';
import { Footer } from 'app/components/Footer';
import { AboutHealth } from 'app/pages/AboutHealth';
import { ScrollToTop } from 'app/components/ScrollToTop';
import withAuth from '../hocs/withAuth';
import { getUserInfo } from 'utils/storage';

const Pages = {
  TopPage: withAuth(TopPage),
  MyRecord: withAuth(MyRecord),
  AboutHealth: AboutHealth,
};

const AdminLayout = () => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Box component="main">
        <Toolbar />
        <Switch>
          <Route
            path="/"
            render={() => (
              <Redirect
                exact={true}
                from="/"
                to={{
                  pathname: isEmpty(getUserInfo()) ? '/login' : '/top-page',
                }}
              />
            )}
            exact={true}
          />
          <Route path="/top-page" component={Pages.TopPage} exact={true} />
          <Route path="/my-record" component={Pages.MyRecord} exact={true} />
          <Route
            path="/about-health"
            component={Pages.AboutHealth}
            exact={true}
          />
        </Switch>
        <Box sx={{ mt: 3 }}>
          <Footer />
        </Box>
        <ScrollToTop />
      </Box>
    </Box>
  );
};

export default AdminLayout;
