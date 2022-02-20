import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import PageLoader from "./components/loader";
import { AnimatePresence } from "framer-motion";

const LoadableHome = Loadable({
  loader: async () =>
    await import(/* webpackChunkName: 'home' */ "./pages/Home"),
  loading: () => <PageLoader />
});

const LoadableServices = Loadable({
  loader: () => import(/* webpackChunkName: 'services' */ "./pages/services"),
  loading: () => <PageLoader />
});

const LoadableUpgrade = Loadable({
  loader: () => import(/* webpackChunkName: 'upgrade' */ "./pages/upgrade"),
  loading: () => <PageLoader />
});

const LoadableWork = Loadable({
  loader: () => import(/* webpackChunkName: 'work' */ "./pages/work"),
  loading: () => <PageLoader />
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ "./pages/about"),
  loading: () => <PageLoader />
});

const LoadableContact = Loadable({
  loader: () => import(/* webpackChunkName: 'contact' */ "./pages/contact"),
  loading: () => <PageLoader />
});

const LoadableTestContact = Loadable({
  loader: () => import(/* webpackChunkName: 'contact' */ "./pages/contact"),
  loading: () => <PageLoader />
});

const LoadableMakemeliveLanding = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'landingpage' */ "./pages/mmllanding"),
  loading: () => <PageLoader />
});

const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'notfound' */ "./pages/nopage"),
  loading: () => <PageLoader />
});

const Routes = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route exact path="/services" component={LoadableServices} />
        <Route exact path="/upgrade" component={LoadableUpgrade} />
        <Route exact path="/work" component={LoadableWork} />
        <Route exact path="/about-us" component={LoadableAbout} />
        <Route exact path="/contact-us" component={LoadableContact} />
        <Route exact path="/test-contact-us" component={LoadableTestContact} />
        <Route exact path="/mmllanding" component={LoadableMakemeliveLanding} />
        <Route component={LoadableNotFound} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
