import { FaRegSun } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";

type Mode = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};
const ToggleMode = ({ mode, setMode }: Mode) => {
  const toggle: () => void = () => {
    setMode(!mode);
  };
  return (
    <button onClick={() => toggle()} className="border rounded-md px-4 py-3">
      {mode ? <MdDarkMode /> : <FaRegSun className="text-amber-500" />}
    </button>
  );
};

export default ToggleMode;
