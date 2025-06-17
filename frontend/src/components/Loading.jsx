import React from "react";
import { GridLoader } from "react-spinners";

export default function Loading( {theme }) {
    
  return (
    <div className="w-full h-full flex items-center justify-center">
      <GridLoader
      color={theme === "light" ? "#000000" : "#ffffff"}
        loading
        margin={3}
        size={72}
        speedMultiplier={1}
        width={0}
      />
    </div>
  );
}
