import { useEffect, useState } from "react";
import Filter from "./Filter";
import Card from "./Card";
import "./App.css";

function App() {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const categories = ["Tümü", ...new Set(apps.map((item) => item.category))];

  useEffect(() => {
    fetch("apps.json").then((response) => {
      response.json().then((fetchedApps) => {
        setApps(fetchedApps);
        setFilteredApps(fetchedApps);
      });
    });
  }, []);

  const onFilter = (category, setSelectedCategory) => {
    setFilteredApps(
      category === "Tümü"
        ? apps
        : apps.filter((data) => data.category === category)
    );
    setSelectedCategory(category);
  };

  return (
    <div className="main-container">
      <div className="social-platforms">
        <a href="https://www.linkedin.com/company/ytuskylab/">
          <img src={process.env.PUBLIC_URL + "/images/linkedin.svg"} />
        </a>
        <a href="https://www.instagram.com/skylabkulubu/">
          <img src={process.env.PUBLIC_URL + "/images/instagram.svg"} />
        </a>
      </div>
      <a href="https://yildizskylab.com/">
        <h1>SKYLAB</h1>
      </a>
      <h2>APPS</h2>
      <a href="https://yildizskylab.com/">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          className="logo"
        />
      </a>
      <div className="apps-container">
        <div className="apps-spaces">
          <Filter categories={categories} onFilter={onFilter} />
          <div className="apps">
            {filteredApps.map((app, index) => (
              <Card key={index} app={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
