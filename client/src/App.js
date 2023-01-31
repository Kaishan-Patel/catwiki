import React from "react";
import { Box } from '@mui/material';
import "./App.css";

// import Components
import Header from './components/Header';
import SearchBar from './components/Search';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Box className="NavBox">
        <div className="LinkToHome">
          <h1>CatWiki</h1>
        </div>
      </Box>
      <Header />
      <SearchBar />
      <Body />
      <Box className="FooterBox">
        <Footer />
      </Box>
    </div>
  );
}

export default App;
