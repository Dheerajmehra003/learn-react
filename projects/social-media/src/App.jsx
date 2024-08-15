import { useState } from "react";
import "./App.css";
import Createpost from "./components/Createpost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Postlist from "./components/Postlist";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} />
      <div className="app">
        <Header />
        {selectedTab === "Home" ? <Postlist /> : <Createpost />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
