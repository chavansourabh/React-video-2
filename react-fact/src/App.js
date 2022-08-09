import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [mode, setMode] = React.useState(false);

  function toggle() {
    setMode((prevMode) => (prevMode = !prevMode));
  }
  // console.log(mode);
  return (
    <div className="container">
      <Navbar toggleDarkMode={toggle} darkMode={mode} />
      <Main darkMode={mode} />
    </div>
  );
}
