import { useState } from "react";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
function App() {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [backButtonClicked, setBackButtonClicked] = useState(false);
  console.log(selectedLevel);

  return (
    <section className="bg-slate-100 w-screen min-h-screen select-none">
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
