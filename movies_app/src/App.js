import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./pages/movies/Movies";
import Search from "./pages/search/Search";
import Trending from "./pages/trending/Trending";
import Series from "./pages/series/Series";
import Header from "./components/Header/Header";
import { Container } from "@material-ui/core";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <div className="App">
          <Container>
            <Route path="/" exact component={Trending} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/series" component={Series} />
            {/* <Route path="/favorites" component={Favorite} /> */}
            <Route path="/search" component={Search} />
          </Container>
        </div>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
