import { useState } from "react";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
function App() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [backButtonClicked, setBackButtonClicked] = useState(false);

  return (
    <section className="bg-slate-100 w-screen h-screen">
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
    </section>
  );
}

export default App;
