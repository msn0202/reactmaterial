import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setData(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <div className="header-bar">
        <Navbar />
      </div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default About;
