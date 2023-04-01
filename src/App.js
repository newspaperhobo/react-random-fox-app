import React, { useState, useEffect } from "react";
import "./styles.css";
import Button from "./components/Button.js";

export default function App() {
  // create a new state named 'isLoading', initialize to false
  const [isLoading, setIsLoading] = useState(false);
  // create a new state named 'fox picture,' and initialize with an emoty string
  const [foxImgUrl, setImgFoxUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // initialize random number to 1 to generate initial fox image
  const [randomNumber, setRandomNumber] = useState(119);
  // useEffect here: the fox picture changes every time the button is clicked
  // use handler function for API call here - set fox picture with api response
  // useEffect dependency is the generation of a random number, each time the
  // dependency array is updated with a new random number, the useEffect runs
  useEffect(() => {
    setErrorMessage("");
    // use the setter method for isLoading and set it to true
    setIsLoading(true);
    // fetch call
    fetch(`https://randomfox.ca/images/${randomNumber}.jpg`)
      .then((response) => {
        // take the data and using a setter function of "foxPicture", update the state of the fox picture
        setImgFoxUrl(response.url);
        // set isLoading to false again
        setIsLoading(false);
      })
      .catch((error) => setErrorMessage("Cannot locate image!"));
  }, [randomNumber]);

  // generate random number function
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // generate random fox picture
  const handleGetFoxPicture = () => {
    const num = getRandomNumber(1, 123);
    setRandomNumber(num);
  };
  // use the setter method for isLoading and set it to true

  return (
    <div className="App">
      {/* on submit, call handler function to fetch fox picture */}
      <h3>Click the button to randomly generate a fox friend!</h3>
      <p>
        <Button handleGetFoxPicture={handleGetFoxPicture} />
      </p>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={foxImgUrl} />
      )}
    </div>
  );
}
