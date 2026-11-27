import { useState } from "react";

const Water = () => {
  const [weight, setWeight] = useState<number>(0);
  const [waterVolume, setWaterVolume] = useState<number>(0);

  const quantity = () => {
    const calculate = (weight * 2.2 * 30) / 2;
    console.log(calculate);
    setWaterVolume(calculate);
  };

  return (
    <div className="text-center flex flex-col justify-center items-center gap-y-5 py-5 max-w-md w-full">
      <h1 className="text-3xl font-bold text-amber-400">
        ควรดื่มน้ำวันละเท่าไหร่?
      </h1>
      <h1 className="text-2xl font-bold">x มล.</h1>
      <div className="flex flex-col gap-5">
        <input
          type="number"
          placeholder="น้ำหนักของคุณ (กิโลกรัม)"
          className="border rounded-lg"
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <p>{`ผลลัพธ์  ${waterVolume} มิลลิลิตร`}</p>
      </div>
      <button
        className="bg-gray-300 w-30 rounded-md"
        onClick={() => quantity()}
      >
        คำนวน
      </button>
    </div>
  );
};

export default Water;
