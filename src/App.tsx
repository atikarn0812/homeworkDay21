import { useState } from "react";
import Water from "./component/Water";
import ToggleMode from "./component/ToggleMode";

const App = () => {
  const [mode, setMode] = useState(false);
  return (
    <div
      className={`flex justify-center w-full min-h-screen items-center ${mode ? "bg-slate-950/90 text-white" : "bg-white"}`}
    >
      <div className="border py-5 px-8 rounded-lg w-full max-w-lg">
        <Water />
        <div className="flex justify-end mt-4">
          <ToggleMode mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
