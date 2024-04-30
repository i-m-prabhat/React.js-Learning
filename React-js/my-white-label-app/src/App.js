// src/App.js
import React, { useEffect } from 'react';
import Header from './components/Header';
import brands from './brands'; // Assuming you have a file with brand configurations

const App = () =>
{
  useEffect(() =>
  {
    console.log(window.location.host);
  }, [])

  return (
    <div>
      {brands.map((brand) => (
        <Header key={brand.id} brand={brand} />
      ))}
    </div>
  );
};

export default App;
