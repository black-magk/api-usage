import "./App.css";

import { Outlet } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";

import MyNavBar from "./components/MyNavBar/MyNavBar";

function App() {
  return (
    <>
      <SearchProvider>
      <MyNavBar/>
      

     
        <Outlet />
        </SearchProvider>
    </>
  );
}

export default App;
