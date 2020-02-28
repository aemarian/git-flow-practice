import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/main.css";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://dog.ceo/api/breeds/image/random");
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <header className="">Dog or No?</header>
      <img src={data.message} alt="dog probably" className="image" />
      <form>
        <input
          type="button"
          name="affirmative"
          value="YES"
          className="button one"
          onClick={() => setData(useState)}
        />
        <input
          type="button"
          name="negative"
          value="NO"
          className="button two"
          onClick={() => setData(alert("but it is"))}
        />
      </form>
    </div>
  );
}

export default App;
