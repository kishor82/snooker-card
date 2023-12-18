"use client";
import React from "react";

const Botton = () => {
  return (
    <button
      type="button"
      className="rounded-md cursor-pointer"
      onClick={() => {
        alert("Clicked");
      }}
    >
      Create New Game
    </button>
  );
};

export default Botton;
