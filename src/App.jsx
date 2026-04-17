import { useState } from "react";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
function App() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [backButtonClicked, setBackButtonClicked] = useState(false);

  return (
    <>
      {!selectedLevel || backButtonClicked ? (
        <Welcome
          setSelectedLevel={setSelectedLevel}
          setBackButtonClicked={setBackButtonClicked}
        />
      ) : (
        <Dashboard
          selectedLevel={selectedLevel}
          setBackButtonClicked={setBackButtonClicked}
        />
      )}
    </>
  );
}

export default App;
