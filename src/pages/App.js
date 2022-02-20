import React from "react";
import Routes from "../routes";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import ScrollToTop from "../components/scrolltop";
import Head from "./Head";
import FooterApp from "../components/footer-board";

const App = () => {
  return (
    <div className="app">
      <Head />
      <Navigation />
      <ScrollToTop />
      <main className="main">
      <Routes />
      </main>
      <Footer />
      <FooterApp />
    </div>
  );
};

export default App;
