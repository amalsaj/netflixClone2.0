import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/Row_Post/RowPost";
import { romance, horror, comedy, action, orginals } from "./constants/urls";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={orginals} title="NetFlix Orginals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      {/* <RowPost url={Documentary} title='Documentary' isSmall/> */}
    </div>
  );
}

export default App;
