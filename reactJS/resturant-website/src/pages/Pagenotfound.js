import React from "react";
// From src/App.js or any other file not inside the Layout folder
import Layout from './components/Layout/Layout'; // Correct relative path from 'src/'

const Pagenotfound = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
    </Layout>
  );
};

export default Pagenotfound;