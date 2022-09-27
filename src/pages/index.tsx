import type { NextPage } from "next";
import { useState } from "react";
import BrickCard from "@components/BrickCard";

const Home: NextPage = () => {
  const [state, setState] = useState([
    { color: "bg-black", width: 15 },
    { color: "bg-purple-500", width: 15 },
    { color: "bg-yellow-500", width: 15 },
    { color: "bg-purple-600", width: 15 },
    { color: "bg-green-600", width: 15 },
    { color: "bg-red-600", width: 15 },
    { color: "bg-yellow-500", width: 15 },
    { color: "bg-red-700", width: 15 },
    { color: "bg-green-400", width: 15 },
    { color: "bg-red-800", width: 15 },
    { color: "bg-green-500", width: 15 },
    { color: "bg-black", width: 15 },
    { color: "bg-purple-500", width: 15 },
    { color: "bg-yellow-500", width: 15 },
    { color: "bg-purple-600", width: 15 },
    { color: "bg-green-600", width: 15 },
    { color: "bg-red-600", width: 15 },
    { color: "bg-yellow-500", width: 15 },
    { color: "bg-red-700", width: 15 },
    { color: "bg-green-400", width: 15 },
    { color: "bg-red-800", width: 15 },
    { color: "bg-green-500", width: 15 },
    { color: "bg-black", width: 15 },
    { color: "bg-purple-500", width: 15 },
    { color: "bg-yellow-500", width: 15 },
    { color: "bg-purple-600", width: 15 },
    { color: "bg-green-600", width: 15 },
    { color: "bg-red-600", width: 15 },
    { color: "bg-yellow-500", width: 15 },
    { color: "bg-red-700", width: 15 },
    { color: "bg-green-400", width: 15 },
    { color: "bg-red-800", width: 15 },
    { color: "bg-green-500", width: 15 },
    { color: "bg-black", width: 15 },
    { color: "bg-purple-500", width: 15 },
    { color: "bg-yellow-500", width: 15 },
    { color: "bg-purple-600", width: 15 },
    { color: "bg-green-600", width: 15 },
    { color: "bg-red-600", width: 15 },
    { color: "bg-yellow-500", width: 15 },
    { color: "bg-red-700", width: 15 },
    { color: "bg-green-400", width: 15 },
    { color: "bg-red-800", width: 15 },
    { color: "bg-green-500", width: 15 },
  ]);
  const handleChangeSize = (index: number, width: number) => {
    const newState = state.map((item, ind) =>
      index === ind ? { ...item, width: width } : item
    );
    setState(newState);
  };
  return (
    <div className="w-full flex flex-wrap gap-2 p-10">
      {state.map((item, index) => (
        <BrickCard
          key={index}
          item={item}
          handleSize={handleChangeSize}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
