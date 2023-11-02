import React, { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // fetch data fro external API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Random Dog Image</h1>
        {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
