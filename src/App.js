import React from "react";
import Client from "./components/Client";
import { Route, Routes } from "react-router";
import Addclient from "./components/Addclient";
import Header from "./components/Header";
import Sidemenu from "./components/Sidemenu";
import Service from "./components/Service";

const App = () => {
  return (
    <div>
      <Header />
      <Sidemenu />
      <Routes>
        <Route exact path="/" element={<Client />} />
        <Route exact path="/client" element={<Addclient />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
    </div>
  );
};

export default App;
