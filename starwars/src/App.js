import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  const [data, setData] = useState([]);
  // const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((res) => {
        // console.log(res.data.results);
        const dataArr = res.data.results;
        setData(dataArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      <p>
        {data.map((characters) => {
          return (
            <Character
              name={characters.name}
              height={characters.height}
              mass={characters.mass}
              hairColor={characters.hair_color}
              skinColor={characters.skin_color}
              eyeColor={characters.eye_color}
              birthYear={characters.birth_year}
              gender={characters.gender}
            />
          );
        })}
      </p>
    </div>
  );
};

export default App;
