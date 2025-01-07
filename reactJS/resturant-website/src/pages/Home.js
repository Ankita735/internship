import React from "react";
// From src/App.js or any other file not inside the Layout folder
import Layout from './components/Layout/Layout'; // Correct relative path from 'src/'

import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;