import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/main.css";

const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://dog.ceo/api/breeds/image/random");
      setData(res.data);
    };
    fetchData();
  }, [data.message]);
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <header className="">Dog or No?</header>
      <p className="yes">You clicked yes {count} times</p>
      <img src={data.message} alt="dog probably" className="image" />
      <form>
        <input
          type="button"
          name="affirmative"
          value="YES"
          className="button one"
          onClick={() => setData()}
          onClick={() => setCount(count + 1)}
        />
        <input
          type="button"
          name="negative"
          value="NO"
          className="button two"
        />
      </form>
    </div>
  );
};

export default App;
