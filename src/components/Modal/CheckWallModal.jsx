import React from "react";
import ReactDOM from "react-dom";
import { useGlobalContext } from "../../context";

function CheckWallModal() {
  const { showCheckWallModal, setShowCheckWallModal } = useGlobalContext();

  let content = showCheckWallModal && (
    <div className="w-full h-full absolute top-0 flex flex-no-wrap">
      <div
        className="w-full h-full absolute bg-gray-300 z-30 opacity-10"
        style={{ opacity: 0.3 }}
        onClick={() => {
          setShowCheckWallModal(!showCheckWallModal);
        }}
      />
      <div className="w-2/3 max-w-md h-screen  m-auto z-40 flex justify-center items-center">
        <div className="flex flex-col h-screen overflow-y-auto">
          <img src="https://i.imgur.com/bu2TWzQ.jpg" />
          <img src="https://i.imgur.com/a2fbBys.jpg" />
          <img src="https://i.imgur.com/eOof804.jpg" />
          <img src="https://i.imgur.com/ENi4gQO.jpg" />
          <img src="https://i.imgur.com/6caclTp.jpg" />
        </div>
      </div>
    </div>
  );

  return content;
}

export default CheckWallModal;
